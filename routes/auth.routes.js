const { Router } = require('express')
const router = Router()

router.get('', async (req, res) => {

    try {
        res.json({ message: "Test route!"})
    }
    catch (e) {
        res.status(500).json({ message: "Error..."})
    }

})

module.exports = router