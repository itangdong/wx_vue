module.exports = {
  devServer: {
    host: 'i.tangdong.com',
    port: 80,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: false,
        changeOrigin: false,
      }
    }
  }
}