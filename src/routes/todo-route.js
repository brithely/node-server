const express = require('express')
const router = express.Router()
const TodoController = require('../controller/todo-controller')

router.get('/:todoId', TodoController.getTodo);
router.get('/', TodoController.getAllTodo);
router.post('/', TodoController.insertTodo);

module.exports = router;