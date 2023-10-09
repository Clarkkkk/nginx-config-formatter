// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { NginxFormatter } from 'nginx-config-formatter'
import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate() {
    console.log('nginx formatter activated.')
    vscode.languages.registerDocumentFormattingEditProvider('nginx', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const content = document.getText()
            const formatter = new NginxFormatter()
            const formattedContent = formatter.formatFile(content)
            const range = new vscode.Range(
                document.positionAt(0),
                document.positionAt(content.length)
            )
            const edit = new vscode.TextEdit(range, formattedContent)
            return [edit]
        }
    })
}

// This method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
