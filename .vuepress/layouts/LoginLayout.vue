<template lang="pug">
ParentLayout
  template(#page-top)
    el-form(:model="form")
      h3 Log in
      el-form-item(label="")
        el-input(type="password" v-model="form.password" autocomplete="off" placeholder="请输入秘钥")
        el-button(type="danger" @click="confirmHandler") 确认
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

const form = reactive({
  password: '',
})
const router = useRouter()

const confirmHandler = () => {
  if (form.password) {
    localStorage.setItem('token', form.password)
    router.push('/admin')
  } else {
    ElMessage.warning('秘钥校验失败！')
  }
}
</script>

<style lang="stylus" scoped>
.el-form
  width 300px
  margin 50% auto 0
.el-button
  width 100%
  margin-top 20px
h3
  text-align center
</style>
