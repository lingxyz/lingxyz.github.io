import { getDirname, path } from '@vuepress/utils'
import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Zero‘s Website 🙃',
  description: '知识总结，职场经验，人生感悟',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/7.0.0/normalize.min.css' }],
    ['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' }],
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_987629_b1cqvuf9roo.css' }]
  ],
  plugins: [
    require('./plugins/docsPath/index.ts'),
    require('./plugins/homePage/index.ts'),
    require('./plugins/aboutPage/index.ts'),
    require('./plugins/loginPage/index.ts'),
    require('./plugins/adminPage/index.ts'),
    searchPlugin({
    }),
  ],
  // 默认theme配置：https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default
  theme: defaultTheme({
    // 仓库地址。用于生成编辑此页链接。
    repo: 'lingxyz/lingxyz.github.io',
    // 文档源文件地址。这里使用Gitee编辑，配置Gitee自动同步到Github。
    docsRepo: 'https://gitee.com/lingxyz/lingxyz.github.io',

    // 首页logo
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
          {text: '数字化', children: []},
          {text: '新零售', children: []},
          {text: '技术产品', children: []},
          {
            text: '小工具',
            children: [
              {text: '每日一练', link: '/review'},
            ]
          },
        ]
      },
      {
        text: '技术',
        children: [
          {text: '通用', children: [
            {text: '《开发规范》✨', link: 'https://zhangling.site/standard/'},
          ]},
          {text: '前端', children: [
            {text: 'Web前端', link: 'https://zhangling.site/learning/#/web/'},
            {text: '微信开发', link: 'https://zhangling.site/learning/#/wechat/'},
            {text: 'App开发', link: 'https://zhangling.site/learning/#/app/'},
          ]},
          {text: '后端', children: [
            {text: 'Java后端', link: 'https://zhangling.site/learning/#/java/'},
          ]},
          {text: '大数据', children: []},
          {text: '人工智能', children: []},
        ]
      },
      {
        text: '管理',
        children: [
          {text: '团队管理', children: []},
          {text: '项目管理', children: []},
          {text: '技术管理', children: []},
          {text: '向上管理', children: []},
        ]
      },
      {
        text: '概念',
        children: [
          {text: '商业', children: []},
          {text: '世界格局', children: []},
          {text: '管理', children: []},
        ]
      },
      {
        text: '阅读',
        link: 'https://zhangling.site/learning/#/read/lean-ux',
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
