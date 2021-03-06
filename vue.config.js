// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  baseUrl: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: false,
  productionSourceMap: false,
  // configureWebpack: config => {
  //     if (process.env.NODE_ENV === 'production') {
  //         return {
  //             plugins: [
  //                 new BundleAnalyzerPlugin()
  //             ]
  //         }
  //     }
  // },
  // configureWebpack :{
  //   resolve: {
  //     alias: {
  //     },
  //   },
  // },

  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  css: {
      // extract: { ignoreOrder: true },
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 192,
              remPrecision: 2
            })
          ]
        }
      }
  }
}
