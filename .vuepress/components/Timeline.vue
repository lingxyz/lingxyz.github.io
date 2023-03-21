/**
 * Timeline 时间轴
 */
<template lang="pug">
el-timeline
	el-timeline-item(
		v-for="(item, index) in frontmatter.experience"
		:key="index"
		:icon="item.icon"
		:type="item.type"
		:color="item.color"
		:size="item.size"
		:timestamp="item.time"
	)
		div {{item.text}}
		div(v-if="item.text2") {{item.text2}}
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'

export default {
  name: 'Timeline',
  setup() {
    // 读取md中yml配置
    const frontmatter = usePageFrontmatter()
    return {
      frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-timeline
  margin 100px
</style>
