/// <reference types="vite/client" />

interface OptionType {
    name: string;
    spaces: number;
    tabs: number;
    dontJoinCurlyBracet: boolean;
    align: boolean;
    trailingBlankLines: boolean;
    recursive: boolean;
    inputPath: string;
    outputPath: string;
    extension: string;
}
