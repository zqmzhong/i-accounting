const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'https://b3g4ozaf1k.execute-api.ap-northeast-1.amazonaws.com/Prod',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}