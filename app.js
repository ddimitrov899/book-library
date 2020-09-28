const app = require('express')()
const dotenv = require('dotenv')
const path = require('path')

/**
 * load env vars
 */
dotenv.config({path: './sertver/env/config.env'})

require('./sertver/configs/express.config')(app)


/**
 * import routes
 */
require('./sertver/configs/router.config')(app)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port http://localhost:${port} on ${process.env.NODE_ENV} mode.`))
