# Personal Website

Welcome to my [personal website](https://zhangling.site). Read more about me:

[`掘金`](https://juejin.im/user/59e6e9acf265da43111f4c21/collections?type=created)
[`代码`](https://github.com/lingxyz)
[`Email`](mailto:zhangling.me@foxmail.com)


## WebSite Features
基于[Vuepress 2.x](https://vuepress.github.io/zh/)的[默认主题](https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components)包装扩展，继承其所有功能。

- [X] 【结构】网站结构重构。
```shell
.
├── .vuepress # 网站源码
      ├── layouts # 新增页面的布局文件
      ├── plugins # 插件
            ├── HomePage  # 首页（内置，省略md）
            ├── aboutPage # 关于页（内置，省略md）
            ├── guidePage # 导航页（内置，省略md）
            ├── docsPath  # 去除`docs`中文档的相对路径
├── docs      # 博客文档。去除了`docs`中文档的相对路径
      ├── submodule1 # 文集1
      ├── submodule2 # 文集2
      ├── submodulen # 文集n
```
- [X] 【部署】提交代码后默认触发`github actions`自动部署。或执行 `npm run deploy` 一键部署。
- [ ] 集成vuepress-theme-reco主题
- [ ] git submodule集成其它文档。并在deploy一键提交和发布。
- [ ] 在线编辑器。可视化编辑和提交。更方便。
- [ ] 头部导航栏样式
