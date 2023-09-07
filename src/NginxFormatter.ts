import { readFile, writeFile } from 'fs/promises'
import { globby } from 'globby'
import { resolve } from 'pathe'
import { defaultOptions } from './defaults'
import { extractAllPossibleText, stripLine } from './utils'

const INDENTATION = '\t'
const SPACE = '    '

export class NginxFormatter {
    options: OptionType
    indentation: string

    constructor(options?: Partial<OptionType>) {
        this.options = {
            ...defaultOptions,
            ...(options || {})
        }
        if (this.options.indentStyle === 'space') {
            this.indentation = SPACE
        } else {
            this.indentation = INDENTATION
        }
    }

    async getFilePath(filePath: string) {
        return globby(filePath, {
            expandDirectories: {
                extensions: [this.options.extension]
            }
        })
    }

    cleanLines(configContents: string) {
        const splittedByLines = configContents.split(/\r\n|\r|\n/g)
        // put {  } on their own seperate lines
        // trim the spaces before and after each line
        // trim multi spaces into single spaces
        // trim multi lines into two

        for (let index = 0, newline = 0; index < splittedByLines.length; index++) {
            splittedByLines[index] = splittedByLines[index].trim()
            if (!splittedByLines[index].startsWith('#') && splittedByLines[index] !== '') {
                newline = 0
                let line = (splittedByLines[index] = stripLine(splittedByLines[index]))
                if (
                    line !== '}' &&
                    line !== '{' &&
                    !(
                        line.includes("('{") ||
                        line.includes("}')") ||
                        line.includes("'{'") ||
                        line.includes("'}'")
                    )
                ) {
                    const startOfComment = line.indexOf('#')
                    // const comment = startOfComment >= 0 ? line.slice(startOfComment) : ''
                    let code = startOfComment >= 0 ? line.slice(0, startOfComment) : line

                    const removedDoubleQuatations = extractAllPossibleText(code, '"', '"')
                    code = removedDoubleQuatations.filteredInput

                    const startOfParanthesis = code.indexOf('}')
                    if (startOfParanthesis >= 0) {
                        if (startOfParanthesis > 0) {
                            splittedByLines[index] = stripLine(
                                code.slice(0, startOfParanthesis - 1)
                            )
                            splittedByLines.splice(index + 1, 0, '}')
                        }
                        const l2 = stripLine(code.slice(startOfParanthesis + 1))
                        if (l2 !== '') {
                            splittedByLines.splice(index + 2, 0, l2)
                        }
                        code = splittedByLines[index]
                    }
                    const endOfParanthesis = code.indexOf('{')
                    if (endOfParanthesis >= 0) {
                        splittedByLines[index] = stripLine(code.slice(0, endOfParanthesis))
                        splittedByLines.splice(index + 1, 0, '{')
                        const l2 = stripLine(code.slice(endOfParanthesis + 1))
                        if (l2 !== '') {
                            splittedByLines.splice(index + 2, 0, l2)
                        }
                    }

                    removedDoubleQuatations.filteredInput = splittedByLines[index]
                    line = removedDoubleQuatations.getRestored()
                    splittedByLines[index] = line
                }
            } else if (splittedByLines[index] === '') {
                // remove more than two newlines
                if (newline++ >= 2) {
                    // while(splittedByLines[index]=="")
                    splittedByLines.splice(index, 1)
                    index--
                }
            }
        }
        return splittedByLines
    }

    joinOpeningBracket(lines: string[]) {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            if (line === '{') {
                // just make sure we don't put anything before 0
                if (i >= 1) {
                    lines[i] = lines[i - 1] + ' {'
                    if (
                        this.options.trailingBlankLines &&
                        lines.length > i + 1 &&
                        lines[i + 1].length > 0
                    ) {
                        lines.splice(i + 1, 0, '')
                    }
                    lines.splice(i - 1, 1)
                }
            }
        }
        return lines
    }

    // Indents the lines according to their nesting level determined by curly brackets.
    performIndentation(lines: string[]) {
        const indentedLines: string[] = []
        let currentIndent = 0
        for (const line of lines) {
            if (!line.startsWith('#') && /.*?\}(\s*#.*)?$/.test(line) && currentIndent > 0) {
                currentIndent -= 1
            }
            if (line !== '') {
                indentedLines.push(this.indentation.repeat(currentIndent) + line)
            } else {
                indentedLines.push('')
            }
            if (!line.startsWith('#') && /.*?\{(\s*#.*)?$/.test(line)) {
                currentIndent += 1
            }
        }
        return indentedLines
    }

    performAlignment(lines: string[]) {
        const allLines: string[] = []
        const attributeLines: string[] = []
        let minAlignColumn = 0
        for (const line of lines) {
            if (
                line !== '' &&
                !line.endsWith('{') &&
                !line.startsWith('#') &&
                !line.endsWith('}') &&
                !line.trim().startsWith('upstream') &&
                !line.trim().includes('location')
            ) {
                const splitLine = line.match(/\S+/g)
                if (splitLine && splitLine.length > 1) {
                    attributeLines.push(line)
                    const columnAtAttrValue = line.indexOf(splitLine[1]) + 1
                    if (minAlignColumn < columnAtAttrValue) {
                        minAlignColumn = columnAtAttrValue
                    }
                }
            }
            allLines.push(line)
        }
        for (let i = 0; i < allLines.length; i++) {
            const line = allLines[i]
            if (attributeLines.includes(line)) {
                const split = line.match(/\S+/g)
                const indent = line.match(/\s+/g)?.[0]
                if (split && indent) {
                    allLines[i] =
                        indent +
                        split[0] +
                        ' '.repeat(minAlignColumn - split[0].length - indent.length) +
                        split.slice(1, split.length).join(' ')
                }
            }
        }

        return allLines
    }

    formatFile(content: string) {
        let lines = this.cleanLines(content)

        if (!this.options.dontJoinCurlyBracet) {
            lines = this.joinOpeningBracket(lines)
        }
        // perform the indentation
        lines = this.performIndentation(lines)
        // vertically align all eligible declarations
        if (this.options.align) {
            lines = this.performAlignment(lines)
        }

        // combine all the lines back together
        return lines.join('\n')
    }

    async format(path: string) {
        const files = await this.getFilePath(path)
        for (const filePath of files) {
            const absolutePath = resolve(process.cwd(), filePath)
            const fileContent = await readFile(absolutePath, { encoding: 'utf8' })
            const outputContents = await this.formatFile(fileContent)
            writeFile(absolutePath, outputContents, { encoding: 'utf8' })
        }
    }
}
