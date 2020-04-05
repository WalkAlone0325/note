module.exports = {
  title: '独行的笔记',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './public/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ['link', { rel: 'manifest', href: '/photo.jpg' }],
    // ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  // serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      { text: '主页', link: '/index/' },
      {
        text: 'Link',
        items: [
          // link: 指向链接也可以是外网链接
          { text: '百度', link: 'https://www.baidu.com' }
        ]
      },
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: 'GitHub', link: 'https://github.com/WalkAlone0325' }
    ],
    sidebar: { // 侧边栏配置 
      // 打开 主页链接时生成下面这个菜单
      '/index/': [
        //多级菜单形式
        {
          // 菜单名
          title: '消化堆',
          // 子菜单
          children: [
            // ['','']=>[路径,标题]
            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
            // 不以 '/' 结尾的就是指向.md文件             
            ['/index/DigestionHeap/Digested', '消化过'], // '/FAQ/DigestionHeap/Digested.md'文件
            ['/index/DigestionHeap/Digesting', '消化中'],
            ['/index/DigestionHeap/DigestWill', '待消化']
          ]
        }
      ]
    },
    sidebarDepth: 4, // 侧边栏显示4级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
  }
};