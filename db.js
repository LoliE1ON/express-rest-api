const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async (callback) => {

    // Connection string
    const mongoConnectionString = process.env.MONGO_CONNECTION

    // Connection to mongodb
    mongoose.connect(mongoConnectionString, {
        useNewUrlParser: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    // Start server
    db.once('open', () => callback());

}