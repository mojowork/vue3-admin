module.exports = {
  publicPath: './',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          colorBg: '#F5F7FB',
          heightHeader: '70px'
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
