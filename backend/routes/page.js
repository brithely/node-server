const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
    res.render('profile', { title: 'My Info' });
});

router.get('/join', (req, res) => {
    res.render()
});

module.exports = router;