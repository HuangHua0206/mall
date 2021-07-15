module.exports = {
  lintOnSave: false,
  devServer: {
    port: 9999,
    open: true,
    proxy: {
      '/': {
        target: 'http://localhost:8003/'
      }
    }
  },
};

