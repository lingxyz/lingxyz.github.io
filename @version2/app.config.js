/**
 * 项目配置
 */

const config = {
  // dev 环境配置
  dev: {
    // ajax base url
    baseUrl: '',
  },
  // test 环境配置
  test: {
  },
  // uat 环境配置
  uat: {
  },
  // prd 环境配置
  prd: {
  }
}[process.env.NODE_ENV]

export const baseUrl = config.baseUrl
