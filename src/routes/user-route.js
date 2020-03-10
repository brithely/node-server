const express = require('express');
const router = express.Router();

/* GET user profile. */
router.get('/me', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;