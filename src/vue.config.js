module.exports = {
    devServer: {
      proxy: {
        '^/botapi': {
          target: 'https://localhost:7003',
          changeOrigin: true
        },
      }
    }
  }