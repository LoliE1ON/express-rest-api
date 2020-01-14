const { Schema, model } = require('mongoose')

// User model
const schema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    }
})

module.exports = model('User', schema)