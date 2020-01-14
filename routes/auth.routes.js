const { Router } = require('express')
const router = Router()
const middleware = require('../middlewares/auth.middleware')
const User = require('../models/User')

// Middleware
router.use(middleware);

// Login
router.post('/login', async (req, res) => {
    res.status(500).json({
        time: req.requestTime,
        message: "Work in progress..."
    })
})

// Register new user
router.post('/register', async (req, res) => {

    console.log(req)

    const session = "123JPhj78d"
    const user = new User({
        login: req.body.login,
        password: req.body.password,
        session
    })

    try {

        // Save new user
        await user.save()
        res.json({
            message: "You have successfully registered",
            user: {
                login: req.body.login,
                session
            }
        })

    }
    catch (e) {
        res.status(500).json({
            message: "Server error"
        })
    }

})

module.exports = router