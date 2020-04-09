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
      { text: '框架相关', link: '/frame/' },
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
            ['/base/html/html', 'html'],
            ['/base/css/css', 'css'],
            ['/base/js/js', 'javascript'],
          ]
        },
        {
          title: '深入', children: [
            ['/base/h5/h5', 'html5'],
            ['/base/css3/css3', 'css3'],
            ['/base/es6/es6', 'es6'],
          ]
        }
      ],
      '/frame/': [
        {
          title: '框架相关',
          children: [
            ['/frame/vue/vue', 'Vue'],
            ['/frame/vue/vue-router', 'VueRouter'],
            ['/frame/vue/vuex', 'Vuex'],
            ['/frame/react/react', 'React'],
            ['/frame/ssr/ssr', 'SSR']
          ]
        }
      ]
    },
    sidebarDepth: 4, // 侧边栏显示4级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
  }
};