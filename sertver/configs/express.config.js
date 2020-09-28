const expressConfig = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = (app) => {
    try {
        app.use(bodyParser.urlencoded({ extended: false })) // Body parser use Form Data
        app.use(bodyParser.json()) // Body parser use JSON data
        app.use(cors()) // cors
        app.use(expressConfig.static('client')) // public path
    } catch (ex) {
        console.log(ex)
    }
    console.log('Express Ready!')
}
