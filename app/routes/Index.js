const routes = require('express').Router();
const Auth = require('./Auth.js');
const Pessoas = require('./Pessoas.js')

routes.use('/pessoas', Pessoas);
routes.use('/auth', Auth);


module.exports = routes;