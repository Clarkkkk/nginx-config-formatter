# Nginx Config Formatter

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/aaaaronzhou.nginx-config-formatter-vscode-extension.svg)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/aaaaronzhou.nginx-config-formatter-vscode-extension.svg)
![Visual Studio Marketplace Rating Stars](https://img.shields.io/visual-studio-marketplace/stars/aaaaronzhou.nginx-config-formatter-vscode-extension.svg)
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Clarkkkk/nginx-config-formatter/.github%2Fworkflows%2Fpublish.yml)](https://github.com/Clarkkkk/nginx-config-formatter/actions)

A formatter with minimal configurations for Nginx config files based on [nginx-config-formatter](https://www.npmjs.com/package/nginx-config-formatter).

## Features

- all lines are indented in an uniform manner, with 4 spaces per level
- neighbouring empty lines are collapsed to at most two empty lines
- empty lines after `{` or before `}` are trimmed
- curly braces placement follows Java convention
- whitespaces are collapsed, except in comments and quotation marks

## Settings

You can configure the extension in Settings.

There are 3 configuration options:

- Indent Style: Set the indent style, space or tab
- Align: Whether to align the values of all directives in the same block
- Trailing Blank Lines: Whether to append a trailing blank line at the end of the file

## Changelog

See [CHANGELOG](https://github.com/Clarkkkk/nginx-config-formatter/blob/main/CHANGELOG.md)

## Feedback

Bugs, feature requests and more are welcome here [GitHub Issues](https://github.com/Clarkkkk/nginx-config-formatter/issues).

[npm-url]: https://www.npmjs.com/package/nginx-config-formatter
[npm-image]: https://badge.fury.io/js/nginx-config-formatter.svg
[npm-download]: https://img.shields.io/npm/dw/nginx-config-formatter
[license]: https://img.shields.io/github/license/Clarkkkk/nginx-config-formatter
[license-url]: https://github.com/Clarkkkk/nginx-config-formatter/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/nginx-config-formatter
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/nginx-config-formatter/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/nginx-config-formatter/actions
