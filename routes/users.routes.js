const { Router } = require('express')
const router = Router()
const usersListController = require('../controllers/users/list.controller')

// Get all users
router.get('/list', async (req, res) => usersListController(req, res))

module.exports = router