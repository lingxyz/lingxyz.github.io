// 后台首页（省去md）
import { createPage } from '@vuepress/core'

const createAdminPage = (options, app) => {
  return {
    name: 'vuepress-plugin-createAdminPage',
    async onInitialized(app) {
      // if loginpage doesn't exist
      if (app.pages.every((page) => page.path !== '/admin')) {
        // 页面数据准备
        // 创建一个登录页
        const adminpage = await createPage(app, {
          path: '/admin',
          // 设置 frontmatter
          frontmatter: {
            layout: 'AdminLayout',
            sidebar: {
              '/admin': [
                {
                  text: 'Web前端',
                  children: [{
                    text: 'JavaScript',
                    link: '/javascript',
                  }, {
                    text: 'Vue',
                    link: '/vue',
                  }, {
                    text: 'Vite',
                    link: '/vite',
                  }],
                },
                {
                  text: 'Java 后端',
                  children: [{
                    text: 'Java',
                    link: '/java',
                  }, {
                    text: 'Spring Boot',
                    link: '/springboot',
                  }],
                },
              ],
            },
          },
        })
        // 把它添加到 `app.pages`
        app.pages.push(adminpage)
      }
    },
  }
}

module.exports = createAdminPage
