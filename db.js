const mongoose = require('mongoose')
const config = require('config')

module.exports = async (callback) => {

    // Connetion to mongo
    mongoose.connect(config.get('db.mongoUri'), {
        useNewUrlParser: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    // Start server
    db.once('open', () => callback());

}