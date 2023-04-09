import { extractTextBySeperator } from './extractTextBySeperator'

/**
 * Grabs text in between two seperators seperator1 thetextIwant seperator2
 * @param {string} input String to seperate
 * @param {string} seperator1 The first seperator to use
 * @param {string} seperator2 The second seperator to use
 * @return {object}
 */
export function extractAllPossibleText(input: string, seperator1: string, seperator2: string | undefined) {
    if (seperator2 === undefined) { seperator2 = seperator1 }
    const extracted: Record<string, string> = {}
    let textInBetween: string
    let cnt = 0
    const seperator1CharCode = seperator1.length > 0 ? seperator1.charCodeAt(0) : ''
    const seperator2CharCode = seperator2.length > 0 ? seperator2.charCodeAt(0) : ''
    while ((textInBetween = extractTextBySeperator(input, seperator1, seperator2)) !== '') {
        const placeHolder = '#$#%#$#placeholder' + cnt + '' + seperator1CharCode + '' + seperator2CharCode + '#$#%#$#'
        extracted[placeHolder] = seperator1 + textInBetween + seperator2
        input = input.replace(extracted[placeHolder], placeHolder)
        cnt++
    }
    return {
        filteredInput: input,
        extracted,
        getRestored: function () {
            let textToFix = this.filteredInput
            for (const key in extracted) {
                textToFix = textToFix.replace(key, extracted[key])
            }
            return textToFix
        }
    }
}
