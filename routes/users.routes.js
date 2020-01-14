const { Router } = require('express')
const router = Router()
const User = require('../models/User')

// Get all users
router.get('/get', async (req, res) => {

    try {
        const users = await User.find();
        return res.json({ users });
    } catch (error) {
        return res.status(500).send("Server error");
    }

})

module.exports = router