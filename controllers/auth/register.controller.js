const User = require('../../models/User')
const crypto = require('crypto')

// Generate session for new user
function generateSession(password) {
    return crypto.createHmac('sha256', password)
        .update(Math.round((new Date()).getTime() / 1000).toString())
        .digest('hex');
}

// Register new user
async function register(login, password) {

    // Generate session
    const session = generateSession(password)

    const user = new User({ login, password, session })
    return await user.save()
}

module.exports = async (req, res) => {

    try {

        // Register new user
        const user = await register(req.body.login, req.body.password)

        return res.json({
            message: "You have successfully registered",
            user: {
                login: user.login,
                session: user.session
            }
        })
    }
    catch (e) {
        return res.status(500).json({ message: "Server error" })
    }

}