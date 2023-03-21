// 首页（省去md）
import { createPage } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import jsyaml from 'js-yaml'
import  fs from  'fs';
const homeDB = fs.readFileSync(path.resolve(__dirname, './data.yaml'), 'utf8')

const createHomePage = (options, app) => {
  return {
    name: 'vuepress-plugin-createHomePage',
    async onInitialized(app) {
      // 强制覆盖掉README.md。使github介绍与网站首页分离。
      app.pages.filter(page => page.path !== '/')
      // 页面数据准备
      const homeData = jsyaml.load(homeDB)
      // 创建一个首页
      const homepage = await createPage(app, {
        path: '/',
        // 设置 frontmatter
        frontmatter: homeData,
        // 设置 markdown 内容
        // content: ``
      })
      // 把它添加到 `app.pages`
      app.pages.push(homepage)
    },
  }
}

module.exports = createHomePage
