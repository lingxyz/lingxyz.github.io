// 关于页面（省去md）
// todo: 做成简历，加密码

import { createPage } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import jsyaml from 'js-yaml'
import  fs from  'fs';
const aboutmeDB = fs.readFileSync(path.resolve(__dirname, './data.yaml'), 'utf8')

const createAboutPage = (options, app) => {
  return {
    name: 'vuepress-plugin-createAboutPage',
    async onInitialized(app) {
      // if aboutpage doesn't exist
      if (app.pages.every((page) => page.path !== '/aboutme')) {
        // 页面数据准备
        const aboutData = jsyaml.load(aboutmeDB)
        // 创建一个关于页
        const aboutpage = await createPage(app, {
          path: '/aboutme',
          // 设置 frontmatter
          frontmatter: aboutData,
          // 设置 markdown 内容
          // content: ``
        })
        // 把它添加到 `app.pages`
        app.pages.push(aboutpage)
      }
    },
  }
}

module.exports = createAboutPage
