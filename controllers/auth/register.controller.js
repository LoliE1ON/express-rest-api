const User = require('../../models/User')
const session = require('../../components/session/generate')

// Register new user
async function register(login, password) {

    // Generate session
    const userSession = session.generate(password)

    const user = new User({ login, password, session: userSession })
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