/**
 * 关于页
 */
<template>
  <ParentLayout>
    <template #page-top>
      <About />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import About from '../components/About.vue'

export default {
  components: {
    ParentLayout,
    About
  },
}
</script>
