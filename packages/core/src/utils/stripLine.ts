import { extractAllPossibleText } from './extractAllPossibleText'

/**
 * @param {string} singleLine the whole nginx config
 * @return {string} stripped out string without multi spaces
 */
export function stripLine(singleLine: string) {
    // """Strips the line and replaces neighbouring whitespaces with single space (except when within quotation marks)."""
    // trim the line before and after
    const trimmed = singleLine.trim()
    // get text without any quatation marks(text foudn with quatation marks is replaced with a placeholder)
    const removedDoubleQuatations = extractAllPossibleText(trimmed, '"', '"')
    // replace multi spaces with single spaces, but skip in sub_filter directive
    if (!removedDoubleQuatations.filteredInput.includes('sub_filter')) {
        removedDoubleQuatations.filteredInput = removedDoubleQuatations.filteredInput.replace(
            /\s\s+/g,
            ' '
        )
    }
    // restore anything of quatation marks
    return removedDoubleQuatations.getRestored()
}
