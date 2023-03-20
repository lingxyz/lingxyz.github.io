<template>
  <ParentLayout>
    <template #page-top>
      <Timeline />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Timeline from '../components/Timeline.vue'

export default {
  components: {
    ParentLayout,
    Timeline
  },
}
</script>
