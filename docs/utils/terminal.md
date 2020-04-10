# 终端工具篇

> 在 window10 上，cmd 和 powershell 的命令行很多人都认为不是很好

## 安装 Windows Terminal

在 w10 的应用商店里可以直接进行安装

这里粘贴一份主题的配置

```json
"profiles": [
  {
    "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6154}",
    "name": "Powershell Core",
    "commandline": "D:\\Tools\\PowerShell\\7\\pwsh.exe",
    "hidden": false,
    "cursorShape": "vintage",
    // "acrylicOpacity": 0.5,
    "backgroundImage": "C:\\Users\\Walker\\AppData\\Local\\Terminal\\bg1.jpg",
    "icon": "D:\\Tools\\PowerShell\\7\\assets\\Powershell_av_colors.ico",
    "backgroundImageOpacity": 0.3,
    "closeOnExit": true,
    "colorScheme": "Blue Matrix",
    "fontFace": "JetBrains Mono",
    "fontSize": 14,
    "historySize": 9001,
    "padding": "0, 0, 0, 0",
    "tabTitle": "Powershell Core",
    "startingDirectory": "./",
    "useAcrylic": false
  },
]
```

## 美化（安装 `oh-my-posh` 和 `posh-git`）

1. 安装 scoop
   环境要求：
   Windows 版本不低于 Windows 7
   Windows 中的 PowerShell 版本不低于 PowerShell 3
   你能 正常、快速 的访问 GitHub 并下载上面的资源
   你的 Windows 用户名为英文（Windows 用户环境变量中路径值不支持中文字符）
2. 运行 Powershell

   ```sh
   # 保证允许本地脚本的执行
   set-executionpolicy remotesigned -scope currentuser
   ```

3. 安装 scoop
   `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`

4. 安装 `oh-my-posh`

   ```sh
    # 1. 安装 choco
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

    # 2. 安装ConEmu
    choco install ConEmu

    # 3. 安装 posh-git 和 oh-my-posh
    Install-Module posh-git -Scope CurrentUser
    Install-Module oh-my-posh -Scope CurrentUser

    # 4. 设置 Powershell 的 profile
    if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
    notepad $PROFILE

    # 5. 粘贴以下内容进 profile 文件
    Import-Module posh-git
    Import-Module oh-my-posh
    Set-Theme Paradox
   ```
