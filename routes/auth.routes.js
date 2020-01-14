const { Router } = require('express')
const router = Router()
const middleware = require('../middlewares/auth.middleware')

// Middleware
router.use(middleware);

// Login
router.post('/login', async (req, res) => {
    res.status(500).json({
        time: req.requestTime,
        message: "Work in progress..."
    })
})

// Register
router.post('/register', async (req, res) => {
    res.status(500).json({
        message: "Work in progress..."
    })
})

module.exports = router