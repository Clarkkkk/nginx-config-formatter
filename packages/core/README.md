# Nginx Config Formatter

[![NPM version][npm-image]][npm-url] [![NPM Downloads][npm-download]][npm-url] [![License][license]][license-url] [![Minified Size][minified-size]][npm-url] [![Build Status][build-status]][github-actions]

A formatter for Nginx config files. Both API and CLI are available.

## Features

Features from [nginxbeautifier](https://github.com/vasilevich/nginxbeautifier)

- all lines are indented in an uniform manner, with 4 spaces per level
- neighbouring empty lines are collapsed to at most two empty lines
- curly braces placement follows Java convention
- whitespaces are collapsed, except in comments and quotation marks

Plus we have:

- empty lines after `{` or before `}` are trimmed
- an API with full TypeScript support
- tests to ensure consistency

## CLI Usage

```sh
npm i -g nginx-config-formatter
```

Or

```sh
pnpm i -g nginx-config-formatter
```

```
nginx-config-formatter -p /etc/nginx

available options:
-p, --path (required)          the path of files to be formatted
-h, --help                     display usage help
-i, --indentStyle              style of indentation, space or tab, defaults to space
-c, --dontJoinCurlyBracket     if true, the opening bracket starts with a new line, defaults to false
-a, --align                    align the values of all directives in the same block, defaults to false
-l, --trailingBlankLines       Append a trailing blank line after the opening bracket, defaults to false
-ext, --extension              the file extension of nginx config files, defaults to conf

```

## API Usage

### `formatFile(path: string, options?: OptionType): Promise<void>`

`path` can be the path of a `.conf` file, or a folder contains `.conf` file. [Glob syntax](https://github.com/mrmlnc/fast-glob#pattern-syntax) is also supported. If a folder is provided, all `.conf` files in it and its sub folders will be formatted.

### `formatContent(content: string, options?: OptionType): string`

`content` is the **full** content of a config file. Returns a string of the formatted content.

The APIs above accepts a option object, which contains options similar to the CLI.

```ts
interface OptionType {
    indentStyle: 'space' | 'tab'
    dontJoinCurlyBracket: boolean
    align: boolean
    trailingBlankLines: boolean
    extension: string
}
```

### Example

```js
import { formatFile } from 'nginx-config-formatter'

formatFile('/etc/nginx', {
    indentStyle: 'tab'
})
```

## Changelog

See [CHANGELOG](https://github.com/Clarkkkk/nginx-config-formatter/blob/main/CHANGELOG.md)

## Credits

This project is inspired by [nginxbeautifier](https://github.com/vasilevich/nginxbeautifier) and use some of its code.

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.

[npm-url]: https://www.npmjs.com/package/nginx-config-formatter
[npm-image]: https://badge.fury.io/js/nginx-config-formatter.svg
[npm-download]: https://img.shields.io/npm/dw/nginx-config-formatter
[license]: https://img.shields.io/github/license/Clarkkkk/nginx-config-formatter
[license-url]: https://github.com/Clarkkkk/nginx-config-formatter/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/nginx-config-formatter
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/nginx-config-formatter/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/nginx-config-formatter/actions
