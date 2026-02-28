const routes = require('express').Router();
const routerPessoas = require('./Pessoas')

routes.use('/pessoas', routerPessoas);


module.exports = routes;