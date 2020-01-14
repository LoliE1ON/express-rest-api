const server = require('./server')
const db = require('./db')

// Connection to DB and start server
db(() => server())