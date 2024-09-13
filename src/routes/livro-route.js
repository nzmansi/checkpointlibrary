const express = require('express')
const router = express.Router;
const controller = require("../controllers/livro-controller")

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.post('/', controller.post)
router.delete('/:id', controller.delete)
router.put('/:id', controller.put)

module.exports = router;




