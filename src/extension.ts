import * as vscode from 'vscode';
import * as cp from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    // output channel for displaying command results
    const outputChannel = vscode.window.createOutputChannel('Command Runner');

    let disposable = vscode.commands.registerCommand('command-runner.runCommand', async () => {
        const command = await vscode.window.showInputBox({
            placeHolder: 'Enter the command to run',
            prompt: 'For example: ls -la or npm install'
        });

		// user canceled input
        if (!command) { 
			return;
		}

        outputChannel.show();
        outputChannel.clear();
        outputChannel.appendLine(`Running command: ${command}\n`);

        try {
            const process = cp.exec(command);
            
            process.stdout?.on('data', (data) => {
                outputChannel.append(data.toString());
            });
            
            process.stderr?.on('data', (data) => {
                outputChannel.append(data.toString());
            });
            
            process.on('close', (code) => {
                outputChannel.appendLine(`\nCommand finished with code: ${code}`);
            });
        } catch (error) {
            outputChannel.appendLine(`Failed to start command: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}