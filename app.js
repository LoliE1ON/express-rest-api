const express = require('express')
const db = require('./db')
const router = require('./router')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Connection to DB and start server
db(() => app.listen(PORT, () => router(app)))
