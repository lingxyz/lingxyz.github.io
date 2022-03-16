const path = require('path');

module.exports = {
  lang: 'zh-CN',
  title: 'Zero‘s Website 🙃',
  description: '知识总结，职场经验，人生感悟',
  head: [
    ['link',
      { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
      // todo: fix css link bug
      { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/7.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_987629_b1cqvuf9roo.css' }
    ]
  ],
  // 默认theme配置：https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    navbar: [ // NavbarItem
      {
        text: '博客',
        link: '/blog/',
      },
      {
        text: '文集',
        children: [
          {text: '产品', link: ''},
          {text: '技术', link: ''},
          {text: '管理', link: ''},
          {text: '小说', link: ''},
        ]
      },
      {
        text: '精读',
        children: [
          {text: '精读笔记-书文', link: 'https://zhangling.me/read/'},
          {text: '精读笔记-源码', link: ''},
        ]
      },
      {
        text: '架构',
        children: [
          {text: '产品架构体系', link: ''},
          {text: '前端架构体系', link: ''},
          {text: '后端架构体系', link: ''},
          {text: '数据架构体系', link: ''},
        ]
      },
      {
        text: '项目',
        children: [
          {text: '开源项目', link: ''},
          {text: '商业项目', link: ''},
        ]
      }
    ]
  },
}
