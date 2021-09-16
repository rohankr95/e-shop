// vue.config.js
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true,
            proxy: {
              '^/cart/show/10': {
                target: 'http://10.177.68.12:8085/cart/show/10',
                changeOrigin: true,
                logLevel: 'debug'
              },
            }
    }
}
