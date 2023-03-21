// 强制路径转换：/docs/xxx→、xxx
// 因为将.vuepress提到根路径，文档放在docs路径后，所有文档都会加/docs前缀。需要移除。
const removeDocsPath = (options, app) => {
  return {
    name: 'vuepress-plugin-removeDocsPath',
    async onInitialized(app) {
      app.pages.forEach(page => {
        page.path = page.path.replace(/\/docs/, '')
      })
    },
  }
}

module.exports = removeDocsPath
