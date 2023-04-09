import { fileURLToPath } from 'node:url'
import { readFile as nodeReadFile, writeFile as nodeWriteFile } from 'node:fs/promises'

/**
 * 路径解析，用于取代path.resolve
 * @param {string} url 相对路径
 * @param {string} fileUrl import.meta.url
 * @returns {string}
 */
export const resolvePath = (url: string, fileUrl: string): string => {
    return fileURLToPath(new URL(url, fileUrl))
}

/**
 * 文件是否存在
 * @param {string} path 相对路径
 * @param {string} fileUrl import.meta.url
 */
export async function isFileExisted(path: string, fileUrl: string) {
    try {
        await nodeReadFile(resolvePath(path, fileUrl), { encoding: 'utf8' })
        return true
    } catch {
        return false
    }
}

/**
 * 读取文件
 * @param {string} path 相对路径
 * @param {string} fileUrl import.meta.url
 */
export function readFile(path: string, fileUrl: string) {
    return nodeReadFile(resolvePath(path, fileUrl), { encoding: 'utf8' })
}

/**
 * 写入文件
 * @param {string} path 相对路径
 * @param {string} text 文本
 * @param {string} fileUrl import.meta.url
 */
export function writeFile(path: string, text: string, fileUrl: string) {
    return nodeWriteFile(resolvePath(path, fileUrl), text, { encoding: 'utf8' })
}
