import { NginxFormatter } from './NginxFormatter'
import type { OptionType } from './type'

export async function formatFile(path: string, options?: OptionType) {
    const formatter = new NginxFormatter(options)
    return formatter.format(path)
}

export * from './NginxFormatter'
