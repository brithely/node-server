const express = require('express')
const router = express.Router()
const FrontController = require('../controller/front-controller')

router.get('/', FrontController.index);
router.get('/todo', FrontController.todoList);

module.exports = router;