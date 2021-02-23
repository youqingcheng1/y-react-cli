const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/api", {
            target: './',
            secure: false,
            changeOrigin: true
        })
    )
}