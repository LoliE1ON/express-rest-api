const { Router } = require('express')
const router = Router()

// Login
router.post('/login', async (req, res) => {
    res.status(500).json({
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