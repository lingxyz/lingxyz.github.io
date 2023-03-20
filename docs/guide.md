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

## 大数据

## 人工智能

## 产品

## 管理
