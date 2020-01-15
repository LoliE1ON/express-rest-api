const User = require('../../models/User')

// Get all users
async function getAllUsers() {
    return await User.find()
}

// Controller
module.exports = async (req, res) => {
    try {
        const users = await getAllUsers()
        return res.json({ users })
    } catch (error) {
        return res.status(500).send("Server error")
    }
}