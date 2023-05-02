/**
 * 首页
 */
<template>
  <ParentLayout>
    <template #page-top>
      <Home />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Home from '../components/Home.vue'

export default {
  components: {
    ParentLayout,
    Home
  },
}
</script>
