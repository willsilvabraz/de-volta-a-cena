const router = require('express').Router();
const ControllerPessoa = require('../controller/Pessoas.js')

router.get('/', (req, res) => {
    ControllerPessoa.listar(req, res);
});

router.post('/', (req,res)=>{
    ControllerPessoa.Cadastro(req, res)
});

module.exports =  router;