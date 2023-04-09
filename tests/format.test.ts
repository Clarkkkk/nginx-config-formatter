import { expect, describe, test } from 'vitest'
import { NginxFormatter } from '../src/formatter'
import { readFile } from '../src/utils'

describe('format', async () => {
    const formatter = new NginxFormatter()
    const file = await readFile('./example.conf', import.meta.url)
    test('example.conf', async () => {
        expect(formatter.format(file)).toMatchSnapshot()
    })
})
