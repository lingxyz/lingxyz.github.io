/**
 * Timeline 时间轴
 */
<template lang="pug">
el-timeline
	el-timeline-item(
		v-for="(item, index) in list"
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
export default {
    name: 'Timeline',

	props: {
		list: Array
	},
}
</script>
