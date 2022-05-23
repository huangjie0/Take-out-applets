const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://112.74.99.5:3000/web/api',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  }
})
