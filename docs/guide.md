<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload, Check, SuccessFilled, StarFilled, Right } from '@element-plus/icons-vue'
</script>

<el-button type="" text bg>plain</el-button>
<el-button type="primary" text bg>primary</el-button>
<el-button type="success" text bg>success</el-button>
<el-button type="info" text bg>info</el-button>
<el-button type="warning" text bg>warning</el-button>
<el-button type="danger" text bg>danger</el-button>

```md
- 链接收藏页
- 浏览器收藏
- github收藏
- 在线工具链接
- 等等
```

## 前端
### 框架
<el-button type="success" text bg :icon="SuccessFilled" style="margin: 10px">
  <el-link type="success" href="https://cn.vuejs.org/" target="_blank">Vue3 官方文档</el-link>
</el-button>
<el-button type="primary" text bg :icon="StarFilled" style="margin: 10px">
  <el-link type="primary" href="https://react.docschina.org/" target="_blank">React 中文文档</el-link>
</el-button>
<el-button type="success" text bg :icon="Right" style="margin: 10px">
  <el-link type="success" href="https://uniapp.dcloud.net.cn/" target="_blank">uni-app 官方文档</el-link>
</el-button>

### 组件库
<el-button type="primary" text bg style="margin: 10px">
  <el-link type="primary" href="https://element-plus.gitee.io/zh-CN/" target="_blank">ElementPlus 官方文档</el-link>
</el-button>

## 后端

### 语言
<el-button type="success" text bg :icon="Right" style="margin: 10px">
  <el-link type="success" href="https://www.sxt.cn/Java_jQuery_in_action/History_Direction.html" target="_blank">速学堂 Java实战教程</el-link>
</el-button>
<el-button type="primary" text bg :icon="StarFilled" style="margin: 10px">
  <el-link type="primary" href="https://www.liaoxuefeng.com/wiki/1252599548343744" target="_blank">廖雪峰 Java教程</el-link>
</el-button>

### 框架
springboot

## 大数据

## 人工智能

## 产品

## 管理

## 开发工具
### 博客
<el-button type="success" text bg style="margin: 10px">
  <el-link type="success" href="https://v2.vuepress.vuejs.org/zh/" target="_blank">VuePress 2.x 编译成静态文档</el-link>
</el-button>
<el-button type="primary" text bg style="margin: 10px">
  <el-link type="primary" href="https://docsify.js.org/#/zh-cn/" target="_blank">Docsify 运行时生成文档</el-link>
</el-button>
<el-button type="danger" text bg style="margin: 10px">
  <el-link type="danger" href="https://www.recoluan.com/" target="_blank">午后南杂的博客</el-link>
</el-button>

### 代码托管
<el-button type="" text bg style="margin: 10px">
  <el-link type="" href="https://github.com/lingxyz/" target="_blank">Github</el-link>
</el-button>
<el-button type="success" text bg style="margin: 10px">
  <el-link type="success" href="https://gitee.com/lingxyz" target="_blank">Gitee 镜像</el-link>
</el-button>
