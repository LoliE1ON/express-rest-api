const express = require('express')
const config = require('config')
const router = require('./router')

const db = require('./db')

const app = express()
const PORT = config.get('server.port') || 5000

db(() => {

    app.listen(PORT, () => {

        router(app)
        console.log(`Server started on port ${PORT}`)
    })

})
