const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.getUsers)
router.post('/', controller.addUser)

module.exports = router
