# Command Runner for VS Code

A simple VS Code extension that allows you to run command line commands and see their output in the VS Code interface.

## Features

- Execute arbitrary command line commands
- Display command output in VS Code output panel

## Usage

1. Press F1 or Ctrl+Shift+P to open the command palette
2. Type "Run Command Line Command"
3. Enter a command to execute (for example, `ls -la` or `npm install`)
4. The command execution result will be displayed in the output panel

## Building and Testing the Extension

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vscode-command-runner.git
   cd vscode-command-runner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run compile
   ```

### Testing the Extension
1. Open the project in VS Code
2. Press F5 to start a new VS Code instance with the extension loaded
3. In the new window, press Ctrl+Shift+P and type "Run Command Line Command"
4. Try executing various commands