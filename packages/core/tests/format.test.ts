import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { describe, expect, test } from 'vitest'
import { NginxFormatter } from '../src/NginxFormatter'

describe('format', async () => {
    const path = fileURLToPath(new URL('./example.conf', import.meta.url))
    const file = await readFile(path, { encoding: 'utf8' })
    test('example.conf', async () => {
        const formatter = new NginxFormatter()
        expect(formatter.formatContent(file)).toMatchFileSnapshot('./output/example.output.conf')
    })
})
