import { NginxFormatter } from './NginxFormatter'
import type { OptionType } from './type'

export async function formatFile(path: string, options?: OptionType) {
    const formatter = new NginxFormatter(options)
    return formatter.formatFile(path)
}

export function formatContent(content: string, options?: OptionType) {
    const formatter = new NginxFormatter(options)
    return formatter.formatContent(content)
}

export * from './NginxFormatter'
