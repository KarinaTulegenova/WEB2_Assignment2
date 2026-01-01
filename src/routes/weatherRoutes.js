const router = require('express').Router()
const controller = require('../controllers/WeatherController')

router.get('/', controller.getAll)
router.get('/:city', controller.getOne)
router.post('/', controller.add)
router.put('/:city', controller.update)
router.delete('/:city', controller.delete)

module.exports = router
