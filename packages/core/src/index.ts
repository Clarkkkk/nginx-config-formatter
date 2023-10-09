import { NginxFormatter } from './NginxFormatter'

export async function formatFile(path: string, options?: OptionType) {
    const formatter = new NginxFormatter(options)
    return formatter.format(path)
}

export * from './NginxFormatter'
