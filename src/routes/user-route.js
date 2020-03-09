const express = require('express')
const router = express.Router()
const UserController = require('../controller/user-controller')

router.post('/signin', UserController.create);

module.exports = router;