# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.4.3](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.4.1...v1.4.3) (2023-10-10)


### Bug Fixes

* correct the description of `trailingBlankLines` and set its default value to false in all packages ([b6d4157](https://github.com/Clarkkkk/nginx-config-formatter/commit/b6d4157a73c538b2179318d9c94fca4f92c97dd3))
* **vscode:** fix an error that cause configurations not taking effect ([1df9531](https://github.com/Clarkkkk/nginx-config-formatter/commit/1df953194284c8439c29c256e2ec6495fab9407e))



## [1.4.1](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.4.0...v1.4.1) (2023-10-10)


### Bug Fixes

* **vscode:** fix an error due to the api change ([b645334](https://github.com/Clarkkkk/nginx-config-formatter/commit/b645334a41f9edfa8b552ce4204d88fd867f0870))



# [1.4.0](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.3.0...v1.4.0) (2023-10-10)


### Bug Fixes

* **core:** fix type issues ([b96d119](https://github.com/Clarkkkk/nginx-config-formatter/commit/b96d119bf73e102888d6177043bf92289ce8df16))


### Features

* **core:** change the default value of `indentStyle` to `space` ([19ef14f](https://github.com/Clarkkkk/nginx-config-formatter/commit/19ef14f81ba49c755a353ac56d52e18868ed05b4))
* **core:** export `formatContent` to format the content string ([da80889](https://github.com/Clarkkkk/nginx-config-formatter/commit/da8088979750f2e63bdf4155a84838beba672e96))
* **vscode:** offer a few options for users ([3861651](https://github.com/Clarkkkk/nginx-config-formatter/commit/386165199d45bd7629cd2585c209f338e58aba63))



# [1.3.0](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.2.0...v1.3.0) (2023-10-10)


### Features

* **core:** trim empty lines after `{` or before `}` ([fa109d7](https://github.com/Clarkkkk/nginx-config-formatter/commit/fa109d76922080db1461e2c92a26f40c001997a3))



# [1.2.0](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.1.1...v1.2.0) (2023-10-09)


### Bug Fixes

* **vscode:** do not externalize dependencies ([fdcde8f](https://github.com/Clarkkkk/nginx-config-formatter/commit/fdcde8fbabdfa415b66895908ee66f6b534c112f))


### Features

* **vscode:** add language configuration for auto wrapping etc ([b818b01](https://github.com/Clarkkkk/nginx-config-formatter/commit/b818b0194a9ae9206858d84676917bdb4a90b40a))



## [1.1.1](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.1.0...v1.1.1) (2023-10-09)


### Bug Fixes

* change the language id to activate ([bf51b5a](https://github.com/Clarkkkk/nginx-config-formatter/commit/bf51b5a6d48b954a67de5b51f6be504561163ca2))
* fix typo ([7b18355](https://github.com/Clarkkkk/nginx-config-formatter/commit/7b18355735ec9de2fddf372054f3de38f83cede9))



# [1.1.0](https://github.com/Clarkkkk/nginx-config-formatter/compare/v1.0.0...v1.1.0) (2023-10-09)


### Bug Fixes

* **core:** use dynamic import for globby to support commonjs ([bfe1fea](https://github.com/Clarkkkk/nginx-config-formatter/commit/bfe1feac708a2e5d88173754a33265119da43aa4))


### Features

* create vscode package ([34b3251](https://github.com/Clarkkkk/nginx-config-formatter/commit/34b3251f12e2a1df12e4b294345959734dc8a148))
* **vscode:** nginx config formatter as a vscode extension ([2eb1807](https://github.com/Clarkkkk/nginx-config-formatter/commit/2eb1807f68ffb8af99fe2df5dee7b940ac11ec15))



# 1.0.0 (2023-09-07)


### Features

* export an API for the formatter ([1586e8b](https://github.com/Clarkkkk/nginx-config-formatter/commit/1586e8bcc2b6aaa6576c180bdbf4535a1c3e4f36))
* provide CLI to format files ([7ec85f3](https://github.com/Clarkkkk/nginx-config-formatter/commit/7ec85f34a7c8f29ba7c5a920090543082ce14c36))
