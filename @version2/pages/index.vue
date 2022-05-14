/**
 * 网站首页
 */
<template lang="pug">
.container
	a.photo.animated.zoomIn(href="/aboutme" title="About me")

	.links.animated.fadeInDown(style="animation-delay: .4s;")
		a(href="http://github.com/zhanglingx")
			i.iconfont.icon-github
		a(href="javascript:;")
			i.iconfont.icon-wechat
			img(src="~/assets/qr_wechat.jpg" alt="")
		a(href="http://weibo.com/5565541266")
			i.iconfont.icon-weibo
		a(href="http://twitter.com/lingzZ")
			i.iconfont.icon-twitter
		//- a(href="http://github.com/lingzZ")
		//- 	i.iconfont.icon-qq

	p.about.animated.fadeInDown(style="animation-delay: .8s;") {{indexDB.info.description}}

	.menu
		a.animated(
			v-for="(item, index) in indexDB.menus"
			:href="item.link"
			:class="menusAnimateClass"
			:style="'animation-delay: ' + (1 + 0.2 * index) + 's;'") {{item.title}}

	//- recommend
	.recommend.animated.fadeInLeft(style="animation-delay: 2s;")
		a(
			v-for="(item, index) in indexDB.recommends"
			:href="item.link"
			:style="'background: ' + item.background") {{item.title}}
</template>

<script>
import jsyaml from 'js-yaml'
import indexDB from '~/database/index.yaml'

export default {
	data: () => ({
    // 菜单动画
    menusAnimateClass: "fadeInDown"
  }),

  computed: {
    indexDB () {
      return jsyaml.load(indexDB.body)
    },
  },

	mounted () {
    this.bounce()
	},

	methods: {
		// menu 跳动动画
		bounce () {
			setInterval(() => {
				this.menusAnimateClass = this.menusAnimateClass ? '' : 'bounce'
			}, 3000)
		}
	}

}
</script>

<style lang="stylus" scoped>
// container
.container
	line-height 1.5
	color #000
	font-size 1rem
	font-family "Source Sans Pro",Futura,"Helvetica Neue",Helvetica,"Lantinghei SC","Kaiti SC","Hiragino Sans GB","Microsoft YaHei",sans-serif
	text-align center
	position absolute
	width 100%
	top 40%
	transform translateY(-40%)

// photo
a
	&.photo
		display inline-block
		width 100px
		height 100px
		background url('~assets/photo.jpg') no-repeat center center
		background-size cover
		border-radius 100%
		box-shadow 0px 0px 10px 3px #ccc
		&:hover
			background url('~assets/photo-hover.jpg') no-repeat center center
			background-size cover

// about
.about
	margin-top 20px
	font-size 1.2em
	font-weight normal
	line-height 1.5
	text-align center
	text-shadow 0 1px rgba(255,255,255,.4)

// links
.links
	a
		display inline-block
		margin 12px 6px 0
		color #000
		text-shadow 0 2px rgba(255,255,255,.4)
		border-bottom none
		text-decoration none
		color #888
		position relative
		.iconfont
			font-size 1.2em
		img
			position absolute
			width 0
			top 0
			left 50%
			transform translate(-50%,-100%)
			opacity 0
			transition all .5s
		&:hover
			color #333
			img
				width 120px
				opacity 1

// menu
.menu
	a
		display inline-block
		text-decoration none
		margin 40px 4px 0
		padding 8px 22px
		background rgba(247,245,245,0.6)
		color #000
		&:hover
			color #fff
			background #333

// recommend
.recommend
	max-width 600px
	margin 2rem auto -8rem
	display flex
	align-items center
	// background rgba(247,245,245,0.6)
	width 80%
	// padding .6rem
	position relative
	&:before
		content '推荐'
		width 1em
		position absolute
		left -.2rem
		transform translateX(-100%)
		background #eee
		padding .2rem .4rem
	a
		display inline-block
		text-decoration none
		color #000
		width 10rem
		height 4rem
		line-height 4rem
		background #fff
		margin 0 .2rem
		background #f5f5f5
</style>
