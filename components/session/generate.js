const crypto = require('crypto')

// Generate session for new user
module.exports.generate = (password) => {
    return crypto.createHmac('sha256', password)
        .update(Math.round((new Date()).getTime() / 1000).toString())
        .digest('hex');
};