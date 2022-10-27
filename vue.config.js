const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'./',
  assetsDir:'static',
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave: false,
  // 代理跨域
  devServer: {
    host:'192.168.43.51',
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
  }
})
