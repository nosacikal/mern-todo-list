const router = require('express').Router()
const multer = require('multer')
const todoController = require('./controller')

router.get('/todos', todoController.index)
router.post('/todos', multer().none(), todoController.store)
router.put('/todos/:id', multer().none(), todoController.update)
router.delete('/todos/:id', todoController.destroy)

module.exports = router
