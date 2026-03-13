const router = require('express').Router();
const authSession = require('../middlewares/authSession');

router.get('/perfil', authSession, (req, res) => {

  const userId = req.session.user;

  res.json({
    id: userId
  });

});

module.exports =  router;