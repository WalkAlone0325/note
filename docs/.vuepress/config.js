module.exports = {
  title: '独行的笔记',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ['link', { rel: 'manifest', href: '/photo.jpg' }],
    // ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  // serviceWorker: true, // 是否开启 PWA
  base: '/note/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/base/' },
      { text: '常用工具', link: '/utils/' },
      { text: '框架相关', link: '/frame/' },
      { text: '算法', link: '/algorithm/' },
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      {
        text: 'Link',
        items: [
          // link: 指向链接也可以是外网链接
          { text: '掘金', link: 'https://juejin.im/timeline' },
          { text: '博客', link: 'http://www.jsw0.top' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/WalkAlone0325' }
    ],
    sidebar: { // 侧边栏配置 
      // 打开 主页链接时生成下面这个菜单
      '/base/': [
        ['/base/', '前端基础'],
        {
          title: '基础', children: [
            ['/base/html/html', 'HTML'],
            ['/base/css/css', 'CSS'],
            ['/base/js/js', 'JS'],
          ]
        }
      ],
      '/utils/': [
        ['/utils/', '常用工具'],
        {
          title: '工具', children: [
            ['/utils/terminal', '终端（Windows Terminal）'],
            ['/utils/vscode', 'VSCode'],
          ]
        },
      ],
      '/frame/': [
        ['/frame/', '框架工具'],
        {
          title: 'Vue相关',
          children: [
            ['/frame/vue/Vue', 'Vue'],
            ['/frame/vue/VueRouter', 'VueRouter'],
            ['/frame/vue/Vuex', 'Vuex'],
            ['/frame/vue/Nuxt', 'Nuxt'],
            ['/frame/vue/Interview', '面试题'],
            ['/frame/vue/Interview2', '面试题2'],
            ['/frame/vue/vue-admin', 'VUE_ADMIN'],
          ]
        },
        {
          title: 'React相关',
          children: [
            ['/frame/react/React', 'React'],
            ['/frame/react/Interview', '面试题'],
          ]
        },
        {
          title: 'Webpack相关',
          children: [
            ['/frame/webpack/Webpack', 'Webpack'],
            ['/frame/webpack/Interview', '面试题'],
          ]
        },
        {
          title: '小程序相关',
          children: [
            ['/frame/applets/Applets', '微信小程序'],
            ['/frame/applets/Interview', '面试题'],
          ]
        }
      ],
      '/algorithm/': [
        ['/algorithm/', '数据结构和算法'],
        {
          title: '数据结构',
          children: [
            ['/algorithm/stack/stack', '栈'],
            ['/algorithm/queue/queue', '队列'],
            ['/algorithm/linked-list/linked-list', '链表'],
            ['/algorithm/recursive/recursive', '递归'],
            ['/algorithm/sort/sort', '排序'],
          ]
        }
      ]
    },
    sidebarDepth: 1, // 侧边栏显示
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
  }
};