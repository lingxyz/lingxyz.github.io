// 登录页面（省去md）
import { createPage } from '@vuepress/core'

const createLogInPage = (options, app) => {
  return {
    name: 'vuepress-plugin-createLogInPage',
    async onInitialized(app) {
      // if loginpage doesn't exist
      if (app.pages.every((page) => page.path !== '/login')) {
        // 页面数据准备
        // 创建一个登录页
        const loginpage = await createPage(app, {
          path: '/login',
          // 设置 frontmatter
          frontmatter: {
            layout: 'LoginLayout',
          },
        })
        // 把它添加到 `app.pages`
        app.pages.push(loginpage)
      }
    },
  }
}

module.exports = createLogInPage
