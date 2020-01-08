const mongoose = require('mongoose')
const config = require('config')

module.exports = async (callback) => {

    console.log("Connected to database...")
    try {

        mongoose.connect(config.get('db.mongoUri'), {
            useMongoClient: true
        });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            callback()
            console.log("Connected to database successfully")
        });

    }
    catch (e) {
        console.log('Database error', e.message)
        process.exit(1)
    }

}