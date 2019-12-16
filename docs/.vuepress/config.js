const path = require('path')
module.exports = {
    title: 'JohnQian\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], 
      ['link', { rel: 'manifest', href: '/manifest.json' }],// 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true,
    base: '/', // 这是部署到github相关的配置
    palette: path.resolve(__dirname, 'palette.styl'),
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    search: true,
    searchMaxSuggestions: 10,
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '我们', link: '/accumulate/' },
        {text: '我们的小孩子', link: '/ourChildren/'},
        {text: '', link: 'https://baidu.com'}      
      ],
      sidebar: {
        '/ourChildren/': [
         ['','六个小孩一台戏'],
         ['keke','比克'],
         ['luna','露娜'],
         ['lucky','lucky'],
         ['linger','灵儿'],
         ['dudu','嘟嘟'],
         ['anan','安安']
        ],
        '/accumulate/': [
          ['','宝贝图片']
        ],
      },
      displayAllHeaders: true
    }
  };