const routes = require('express').Router();
const Pessoas = require('./Pessoas.js')

routes.use('/pessoas', Pessoas);


module.exports = routes;