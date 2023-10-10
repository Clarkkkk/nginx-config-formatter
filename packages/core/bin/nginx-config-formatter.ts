#!/usr/bin/env node
import { defineCommand, runMain, showUsage } from 'citty'
import { formatFile } from '../src/index'
import type { OptionType } from '../src/type'

const main = defineCommand({
    meta: {
        name: 'nginx-config-formatter'
    },
    args: {
        help: {
            type: 'boolean',
            alias: 'h',
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
            alias: 'i',
            description: 'style of indentation, space or tab, defaults to space',
            default: 'space'
        },
        dontJoinCurlyBracket: {
            type: 'boolean',
            description: 'if true, the opening bracket starts with a new line, defaults to false',
            alias: 'c',
            default: false
        },
        align: {
            type: 'boolean',
            description: 'align the values of all directives in the same block, defaults to false',
            alias: 'a',
            default: false
        },
        trailingBlankLines: {
            type: 'boolean',
            description: 'append a trailing blank line at the end of the file, defaults to true',
            alias: 'l',
            default: false
        },
        extension: {
            type: 'string',
            description: 'the file extension of nginx config files, defaults to conf',
            alias: 'ext',
            default: 'conf'
        }
    },
    async run({ args }) {
        if (args.help) {
            showUsage(main)
        } else {
            await formatFile(args.path, args as OptionType)
            // eslint-disable-next-line no-console
            console.log('all files formatted.')
        }
    }
})

runMain(main)
