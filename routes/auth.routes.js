const { Router } = require('express')
const router = Router()
const middleware = require('../middlewares/auth.middleware')
const authRegisterController = require('../controllers/auth/register.controller')

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
router.post('/register', async (req, res) => authRegisterController(req, res))

module.exports = router