const controllerRoutes = require('../routes')
module.exports = (app) => {
    app.use('/api/book', controllerRoutes.book)
}
