const { Router } = require('express')
const router = Router()
const middleware = require('../middlewares/auth.middleware')
const User = require('../models/User')
const crypto = require('crypto')

// Middleware
router.use(middleware);

// Login
router.post('/login', async (req, res) => {
    return res.status(500).json({
        time: req.requestTime,
        message: "Work in progress..."
    })
})

// Register new user
router.post('/register', async (req, res) => {

    // Generate session
    const session = crypto.createHmac('sha256', req.body.password)
        .update(Math.round((new Date()).getTime() / 1000).toString())
        .digest('hex');

    const user = new User({
        login: req.body.login,
        password: req.body.password,
        session
    })

    try {

        // Save new user
        await user.save()
        return res.json({
            message: "You have successfully registered",
            user: {
                login: req.body.login,
                session
            }
        })

    }
    catch (e) {
        return res.status(500).json({
            message: "Server error"
        })
    }

})

module.exports = router