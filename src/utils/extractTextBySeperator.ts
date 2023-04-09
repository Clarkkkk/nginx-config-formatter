/**
 * Grabs text in between two seperators seperator1 thetextIwant seperator2
 * @param {string} input String to seperate
 * @param {string} seperator1 The first seperator to use
 * @param {string} seperator2 The second seperator to use
 * @return {string}
 */
export function extractTextBySeperator(input: string, seperator1: string | RegExp, seperator2: string | RegExp | undefined) {
    if (seperator2 === undefined) {
        seperator2 = seperator1
    }
    const seperator1Regex = new RegExp(seperator1)
    const seperator2Regex = new RegExp(seperator2)
    const catchRegex = new RegExp(seperator1 + '(.*?)' + seperator2)
    if (seperator1Regex.test(input) && seperator2Regex.test(input)) {
        return input.match(catchRegex)?.[1] || ''
    } else {
        return ''
    }
}
