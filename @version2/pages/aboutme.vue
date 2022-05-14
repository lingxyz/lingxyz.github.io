/**
 * 关于我
 */
<template lang="pug">
.container
	Timeline(:list="aboutmeDB.experience")
</template>

<script>
import jsyaml from 'js-yaml'
import aboutmeDB from '~/database/aboutme.yaml'
import Timeline from '~/components/Timeline.vue'

export default {
  computed: {
    aboutmeDB () {
      return jsyaml.load(aboutmeDB.body)
    },
  },

	components: { Timeline }
}
</script>

<style lang="stylus" scoped>
.container
	position absolute
	top 50%
	left 50%
	transform translate(-50%, -50%)
</style>
