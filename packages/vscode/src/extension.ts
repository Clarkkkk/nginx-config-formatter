import { NginxFormatter } from 'nginx-config-formatter'
import * as vscode from 'vscode'

export function activate() {
    vscode.languages.registerDocumentFormattingEditProvider('nginx', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const configuration = vscode.workspace.getConfiguration('nginx-config-formatter')
            const content = document.getText()
            const formatter = new NginxFormatter({
                indentStyle: configuration.get('indentStyle'),
                align: configuration.get('align'),
                trailingBlankLines: configuration.get('trailingBlankLines')
            })
            const formattedContent = formatter.formatContent(content)
            const range = new vscode.Range(
                document.positionAt(0),
                document.positionAt(content.length)
            )
            const edit = new vscode.TextEdit(range, formattedContent)
            return [edit]
        }
    })
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
