const router = require('express').Router();
const authController = require('../controller/auth.js');

router.get('/google', authController.googleAuth);

router.get('/google/callback', authController.googleCallback);

module.exports = router;