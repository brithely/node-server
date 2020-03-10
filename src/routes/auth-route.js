const express = require('express')
const router = express.Router()
const AuthController = require('../controller/auth-controller')
const passport = require('passport');

router.post('/tokens', AuthController.login);

module.exports = router;