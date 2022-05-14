/**
 * 404 页面
 */
<template  lang="pug">
  .content
      img(src="~/assets/404.png" alt="")
      p {{ getMsg() }}
      nuxt-link(to="/") Take me home.
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  props: ['error'],
  layout: 'default', // 你可以为错误页面指定自定义的布局
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  text-align center
  height 100vh
  img
    width 20%
    min-width 200px
    margin-top 30vh
  a
    text-decoration none
    color #3eaf7c
</style>
