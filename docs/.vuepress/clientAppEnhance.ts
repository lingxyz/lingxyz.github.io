import { defineClientAppEnhance } from '@vuepress/client'
import HomeLayout from './layouts/Layout.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('HomeLayout', HomeLayout)
})