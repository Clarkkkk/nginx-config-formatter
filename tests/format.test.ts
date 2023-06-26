import { expect, describe, test } from 'vitest'
import { NginxFormatter } from '../src/NginxFormatter'
import { readFile } from '../src/utils'

describe('format', async () => {
    const file = await readFile('./example.conf', import.meta.url)
    test('example.conf', async () => {
        const formatter = new NginxFormatter()
        expect(formatter.formatFile(file)).toMatchFileSnapshot('./output/example.output.conf')
    })
})
