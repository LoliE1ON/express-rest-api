const express = require('express')
const config = require('config')
const db = require('./db')

const app = express()
const PORT = config.get('server.port') || 5000

db(() => {

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })

})
