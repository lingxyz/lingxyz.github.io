import { defineClientConfig } from '@vuepress/client'
import HomeLayout from './layouts/HomeLayout.vue'
import AboutLayout from './layouts/AboutLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 全局注册 element-plus
    app.use(ElementPlus)
    // 全局注册 @element-plus/icons-vue
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
  setup() {},
  layouts: {
    HomeLayout, // 添加页面：首页
    AboutLayout, // 添加页面：关于页
    LoginLayout, // 添加页面：登录页
  },
  rootComponents: [],
})
