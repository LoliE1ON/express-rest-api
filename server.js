const express = require('express')
const router = require('./router')
const app = express()
require('dotenv').config()

// Parse json in response body
app.use(express.json({
    extended: true
}))

// Start server
module.exports = () => app.listen(process.env.SERVER_PORT, () => router(app))