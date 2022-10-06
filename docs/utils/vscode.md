# vscode

1. [VSCode 中值得推荐的常用的 33 个高效前端插件「效率篇」（一）](https://juejin.cn/post/7113538515614302244)
2. [VSCode 中值得推荐的常用的 33 个高效前端插件「效率篇」（二）](https://juejin.cn/post/7113541157019189284)
3. [vscode 上有什么浅色主题插件推荐？](https://www.zhihu.com/question/278251189/answer/2673592076?utm_campaign=shareopn&utm_medium=social&utm_oi=956439569311240192&utm_psn=1561072673332862976&utm_source=wechat_session)

## 最新版 prettier 配置：

```json
{
  // 窗口相关
  "window.titleBarStyle": "custom",
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 0,
  "files.autoSave": "onWindowChange",
  "breadcrumbs.enabled": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Bluloco Dark Italic",
  // 自动更新路径
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 字体缩进主题相关
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.tabSize": 2,
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.fontFamily": "'JetBrains Mono','Source Code Pro',Consolas,'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 18,
  "editor.lineHeight": 22,
  "editor.letterSpacing": 0.7,
  "editor.fontWeight": "400",
  // "workbench.editor.enablePreview": false, //打开文件不覆盖
  // git命令行相关
  "git.path": "D:/Tools/Git/cmd/git.exe",
  "git.autofetch": true,
  "gitlens.views.repositories.files.layout": "tree",
  "git.ignoreLegacyWarning": true,
  "sync.gist": "9686c6181ebf8bdd6a0f631ffe73ac1e",
  "terminal.integrated.shell.windows": "D:\\Tools\\Git\\bin\\bash.exe",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.shellArgs.windows": ["-l", "-i"], // 加载.bash_profile文件
  "explorer.confirmDelete": false,
  "svg.preview.mode": "svg",
  // "files.associations": {
  //   "*.vue": "vue"
  // },
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  },
  "remote.SSH.remotePlatform": {
    "vue-blog": "linux"
  },
  // 格式化相关
  "editor.formatOnSave": true,
  "eslint.format.enable": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll.stylelint": true
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "prettier.printWidth": 100, // 每行输入宽度
  "prettier.semi": false, // 分号
  "prettier.singleQuote": true, // 单引号
  "prettier.quoteProps": "as-needed", // 对象的 key 仅在必要时用引号
  "prettier.trailingComma": "all",
  "prettier.bracketSpacing": true, // 大括号内的首尾需要空格
  "prettier.jsxBracketSameLine": true, // jsx > 紧跟
  "prettier.arrowParens": "avoid", // 箭头函数一个参数时的括号
  "prettier.proseWrap": "preserve", // 使用默认的折行标准
  "prettier.htmlWhitespaceSensitivity": "ignore", // 根据显示样式决定 html 要不要折行
  "prettier.vueIndentScriptAndStyle": false, // vue 文件中的 script 和 style 内不用缩进
  "prettier.endOfLine": "lf", // 换行符使用 lf
  "prettier.embeddedLanguageFormatting": "auto", // 格式化嵌入的内容
  // "files.associations": {
  //   "*.vue": "vue"
  // },\
  "vetur.format.enable": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## `setting.json` 文件配置：

```json
{
  // 窗口相关
  "window.titleBarStyle": "custom",
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 1,
  "files.autoSave": "onWindowChange",
  "breadcrumbs.enabled": true,
  // 自动更新路径
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 字体缩进主题相关
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.fontFamily": "JetBrains Mono,Monaco,Source Code Pro,Consolas,'Courier New', monospace",
  "editor.fontLigatures": true,
  // "editor.lineHeight": 22,
  // "workbench.editor.enablePreview": false, //打开文件不覆盖
  // git命令行相关
  "git.path": "D:/Tools/Git/cmd/git.exe",
  "git.autofetch": true,
  "gitlens.views.repositories.files.layout": "tree",
  "sync.gist": "9686c6181ebf8bdd6a0f631ffe73ac1e",
  "terminal.integrated.shell.windows": "D:\\Tools\\PowerShell\\7\\pwsh.exe",
  "debug.console.wordWrap": false,
  // css相关
  "px-to-rem.px-per-rem": 13,
  // 格式化相关
  "prettier.semi": false,
  "prettier.jsxSingleQuote": true,
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "prettier.bracketSpacing": true,
  "prettier.singleQuote": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "singleQuote": false
    },
    "js-beautify-html": {
      "wrap_line_length": 120,
      "wrap_attributes": "auto",
      "end_with_newline": false
    },
    "prettier": {
      "semi": false, // 末尾分号
      "singleQuote": true, // 单引号
      "htmlWhitespaceSensitivity": "ignore", // 标签>问题
      "jsxBracketSameLine": true,
      "bracketSpacing": true
    }
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true, //保存时自动格式化
  // "eslint.autoFixOnSave": true,
  // "eslint.validate": [
  //   "javascript",
  //   "javascriptreact",
  //   {
  //     "language": "html",
  //     "autoFix": true
  //   },
  //   {
  //     "language": "vue",
  //     "autoFix": true
  //   }
  // ],
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[scss]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "workbench.startupEditor": "welcomePage",
  "explorer.confirmDelete": false,
  "workbench.sideBar.location": "left",
  "files.associations": {
    "*.js": "javascript"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "git.ignoreLegacyWarning": true,
  "browser-preview.startUrl": "http://localhost:8080",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "remote.SSH.remotePlatform": {
    "vue-blog": "linux"
  },
  "editor.wordWrap": "wordWrapColumn",
  "extensions.ignoreRecommendations": false,
  "timeline.excludeSources": [],
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Ayu One"
}
```

## 更新的第二份设置备用。、de

```json
{
  // 窗口相关
  "window.titleBarStyle": "custom",
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 0,
  "files.autoSave": "onWindowChange",
  "breadcrumbs.enabled": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Bluloco Dark Italic",
  // 自动更新路径
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 字体缩进主题相关
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.tabSize": 2,
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.fontFamily": "'JetBrains Mono','Source Code Pro',Consolas,'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 18,
  "editor.lineHeight": 22,
  "editor.letterSpacing": 0.7,
  "editor.fontWeight": "400",
  // "workbench.editor.enablePreview": false, //打开文件不覆盖
  // git命令行相关
  "git.path": "D:/Tools/Git/cmd/git.exe",
  "git.autofetch": true,
  "gitlens.views.repositories.files.layout": "tree",
  "git.ignoreLegacyWarning": true,
  "sync.gist": "9686c6181ebf8bdd6a0f631ffe73ac1e",
  "terminal.integrated.shell.windows": "D:\\Tools\\Git\\bin\\bash.exe",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.shellArgs.windows": ["-l", "-i"], // 加载.bash_profile文件
  // 格式化相关
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true, //保存时自动格式化
  "eslint.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "vetur.validation.template": false,
  "vetur.format.options.tabSize": 2,
  "vetur.format.options.useTabs": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 160,
      "wrap_attributes": "auto",
      "end_with_newline": false
    },
    "prettier": {
      "semi": false, // 末尾分号
      "singleQuote": true, // 单引号
      "htmlWhitespaceSensitivity": "ignore", // 标签>问题
      "jsxBracketSameLine": true,
      "bracketSpacing": true
    },
    "prettyhtml": {
      "semi": false, // 末尾分号
      "singleQuote": true, // 单引号
      "printWidth": 160,
      "tabWidth": 2,
      "useTabs": false
    }
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "remote.SSH.remotePlatform": {
    "vue-blog": "linux"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.quickSuggestions": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "explorer.confirmDelete": false,
  "svg.preview.mode": "svg",
  "files.associations": {
    "*.vue": "vue"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  }
}
```

## 最新

```json
{
  "workbench.colorTheme": "GitHub Dark Classic", // 主题
  "workbench.iconTheme": "material-icon-theme", // 图标
  "window.menuBarVisibility": "toggle",
  "files.autoSave": "onWindowChange", // 窗口失焦自动保存
  "files.eol": "\n", // vscode 编辑器使用 lf
  // 字体缩进
  "editor.formatOnPaste": true, // 格式化
  "editor.formatOnType": true, // 键入一行后自动格式化该行
  "editor.tabSize": 2,
  "editor.fontFamily": "Fira Code,Cascadia Code,JetBrains Mono,Source Code Pro,Consolas,Courier New, monospace",
  "editor.fontLigatures": true, // 连体字
  "editor.fontSize": 16,
  "editor.letterSpacing": 0.6,
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.linkedEditing": true,
  "editor.formatOnSave": true, // 在保存时格式化文件
  // git命令行相关
  "git.path": "D:/Tools/Git/cmd/git.exe",
  "git.autofetch": true,
  "gitlens.views.repositories.files.layout": "tree",
  "terminal.integrated.tabs.enabled": true,
  // "terminal.integrated.automationShell.windows": "D:/Tools/Git/bin/bash.exe",
  "terminal.integrated.shell.windows": "D:/Tools/Git/bin/bash.exe",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.cursorBlinking": true,
  // "terminal.integrated.shellArgs.windows": [
  //   "-l",
  //   "-i"
  // ], // 加载.bash_profile文件
  "explorer.confirmDelete": false, // 文件删除到废纸篓时进行确认
  "svg.preview.mode": "svg",
  "javascript.updateImportsOnFileMove.enabled": "always", // 始终自动更新路径
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "explorer.confirmDragAndDrop": false, // 拖放移动文件或文件夹时不进行确认
  "todo-tree.tree.showScanModeButton": false,
  // eslint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll.stylelint": true
  }, // 在保存时运行的代码操作类型
  // prettier
  "prettier.printWidth": 100, // 每行输入宽度
  "prettier.semi": false, // 分号
  "prettier.singleQuote": true, // 单引号
  "prettier.quoteProps": "as-needed", // 对象的 key 仅在必要时用引号
  "prettier.trailingComma": "all", // 尾随逗号
  "prettier.bracketSpacing": true, // 大括号内的首尾需要空格
  "prettier.jsxBracketSameLine": true, // jsx > 紧跟
  "prettier.arrowParens": "avoid", // 箭头函数一个参数时的括号
  "prettier.proseWrap": "preserve", // 使用默认的折行标准
  "prettier.htmlWhitespaceSensitivity": "ignore", // 根据显示样式决定 html 要不要折行
  "prettier.vueIndentScriptAndStyle": false, // vue 文件中的 script 和 style 内不用缩进
  "prettier.endOfLine": "lf", // 换行符使用 lf
  "prettier.embeddedLanguageFormatting": "auto", // 格式化嵌入的内容
  "vetur.format.enable": false, // vetur 格式化
  "typescript.preferences.quoteStyle": "single", // 用于快速修复的首选引用样式: single (单引号)
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.js": "javascript" // 配置语言的文件关联
  },
  "remote.SSH.remotePlatform": {
    "47.104.81.222": "linux"
  },
  "todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "XXX",
    "[ ]",
    "[x]"
  ],
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)"
  // "path-intellisense.mappings": {
  //     "@": "${workspaceRoot}/src"
  // },
  // "git.ignoreLegacyWarning": true, // 旧版git警告
  // "sync.gist": "9686c6181ebf8bdd6a0f631ffe73ac1e", // 远程拷贝
}
// {
//   "compilerOptions": {
//     "target": "ES6",
//     "module": "commonjs",
//     "allowSyntheticDefaultImports": true,
//     "baseUrl": "./",
//     "paths": {
//       "@/*": [
//         "src/*"
//       ]
//     }
//   },
//   "exclude": [
//     "node_modules"
//   ]
// }
```
