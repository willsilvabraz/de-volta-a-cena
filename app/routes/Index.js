const routes = require('express').Router();
const Auth = require('./Auth.js');
const Pessoas = require('./Pessoas.js')
const perfil = require('./perfil.js')

routes.use('/pessoas', Pessoas);
routes.use('/auth', Auth);
routes.use('/user', perfil);


module.exports = routes;