import { getDirname, path } from '@vuepress/utils'
import { defaultTheme, defineUserConfig } from 'vuepress'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Zero‘s Website 🙃',
  description: '知识总结，职场经验，人生感悟',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/7.0.0/normalize.min.css' }],
    ['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' }],
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_987629_b1cqvuf9roo.css' }]
  ],
  plugins: [
    require('./plugins/homePage/index.ts'),
    require('./plugins/aboutPage/index.ts')
  ],
  // 默认theme配置：https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default
  theme: defaultTheme({
    logo: '/images/photo.webp',

    // 头部导航栏配置
    navbar: [
      {
        text: '杂谈',
        link: '/blog/',
      },
      {
        text: '产品',
        children: [
          {text: '开源项目', link: ''},
          {text: '商业项目', link: ''},
        ]
      },
      {
        text: '技术',
        children: [
          {text: '产品架构体系', link: ''},
          {text: '前端架构体系', link: ''},
          {text: '后端架构体系', link: ''},
          {text: '数据架构体系', link: ''},
        ]
      },
      {
        text: '管理',
        children: [
          {text: '产品', link: ''},
          {text: '技术', link: ''},
          {text: '管理', link: ''},
          {text: '小说', link: ''},
        ]
      },
      {
        text: '概念',
        children: [
          {text: '产品', link: ''},
          {text: '技术', link: ''},
          {text: '管理', link: ''},
          {text: '小说', link: ''},
        ]
      },
      {
        text: '阅读',
        children: [
          {text: '精读笔记-书文', link: 'https://zhangling.site/read/'},
          {text: '精读笔记-源码', link: ''},
        ]
      },
      {
        text: '导航',
        link: '/guide/',
      },
    ]
  }),
  // alias: {
  //   // 组件覆盖：替换主页模块。文档：https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components
  //   '@theme/HomeHero.vue': path.resolve(__dirname, './components/Home.vue'),
  // },
})
