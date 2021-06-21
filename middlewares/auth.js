function auth(req, res, next) {
    console.log("auth middlewares")
    next()
}

module.exports = auth