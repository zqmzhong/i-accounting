const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'https://2viuctci5e.execute-api.ap-northeast-1.amazonaws.com/dev',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}