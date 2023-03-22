/**
 * About 关于我
 */
<template lang="pug">
//- 个人经历时间线
el-timeline(v-if="!dialogFormVisible")
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
//- 密码保护
el-dialog(
  v-model="dialogFormVisible"
  title="权限验证"
  :show-close="false"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  align-center
  style="max-width: 360px;"
)
  el-form(:model="form")
    el-form-item(label="")
      el-input(type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码")
  template(#footer)
    span.dialog-footer
      el-button(type="danger" @click="confirmDialogHandler") 确认
</template>

<script setup>
import { reactive, ref } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import { ElMessage } from 'element-plus'

// 读取 vuepress page 中设置的 frontmatter 数据
const frontmatter = usePageFrontmatter()

// 弹窗密码验证相关
const dialogFormVisible = ref(true)
const password = '000000' // 内置密码
const form = reactive({
  password: '',
})
const confirmDialogHandler = () => {
  if (form.password === password) {
    dialogFormVisible.value = false
  } else {
    ElMessage.warning('权限校验失败！')
  }
}
</script>

<style lang="stylus" scoped>
.el-dialog .el-button
  width 100%
.el-timeline
  margin 100px
</style>
