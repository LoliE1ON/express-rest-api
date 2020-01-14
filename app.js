const express = require('express')
const config = require('config')
const db = require('./db')
const router = require('./router')

const app = express()
const PORT = config.get('server.port') || 5000

// Connection to DB and start server
db(() => app.listen(PORT, () => router(app)))
