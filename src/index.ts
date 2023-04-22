import { NginxFormatter } from './NginxFormatter'

async function format(path: string, options?: OptionType) {
    const formatter = new NginxFormatter(options)
    return formatter.format(path)
}

export default format
