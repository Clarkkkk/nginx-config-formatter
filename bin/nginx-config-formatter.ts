#!/usr/bin/env node
import { defineCommand, runMain, showUsage } from 'citty'
import { formatFile } from '../src/index'

const main = defineCommand({
    meta: {
        name: 'nginx-config-formatter'
    },
    args: {
        help: {
            type: 'boolean',
            description: 'display usage help'
        },
        path: {
            type: 'string',
            alias: 'p',
            description: 'the path of files to be formatted',
            required: true
        },
        indentStyle: {
            type: 'string',
            description: 'style of indentation, `space` or `tab`'
        },
        dontJoinCurlyBracet: {
            type: 'boolean',
            description: '',
            alias: 'c'
        },
        align: {
            type: 'boolean',
            alias: 'a'
        },
        trailingBlankLines: {
            type: 'boolean',
            alias: 'l'
        },
        extension: {
            type: 'string',
            alias: 'ext'
        }
    },
    async run({ args }) {
        if (args.help) {
            showUsage(main)
        } else {
            // const filePath = path.resolve(process.cwd(), args.path)
            await formatFile(args.path, args as OptionType)
            // eslint-disable-next-line no-console
            console.log('all files formatted.')
        }
    }
})

runMain(main)
