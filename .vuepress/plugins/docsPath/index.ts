// 强制路径转换：/docs/xxx→、xxx
// 因为将.vuepress提到根路径，文档放在docs路径后，所有文档都会加/docs前缀。需要移除。
const removeDocsPath = (options, app) => {
  return {
    name: 'vuepress-plugin-removeDocsPath',
    // docs: https://vuepress.github.io/zh/reference/plugin-api.html#extendspage
    async extendsPage(page) {
      page.path = page.data.path = page.path.replace(/\/docs/, '')
    },
  }
}

module.exports = removeDocsPath
