const routes = require('express').Router();
const routerPessoas = require('../controller/Pessoas.js')

routes.use('/pessoas', routerPessoas.Cadastro);


module.exports = routes;