<template>
  <Layout>
    <template #page-top>
      <Home />
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Home from '../components/Home.vue'

export default {
  components: {
    Layout,
    Home
  },
}
</script>