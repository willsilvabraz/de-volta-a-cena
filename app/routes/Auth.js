const router = require('express').Router();
const authController = require('../controller/GoogleOauth.js');
const auth = require('../controller/GithubOauth.js');

router.get('/github', auth.github);
router.get('/github/callback', auth.githubCallback);

router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleCallback);

module.exports = router;