const router = require('express').Router();
const ControllerPessoa = require('../controller/Pessoas.js')
const authSession = require('../middlewares/authSession');


router.get('/', authSession, (req, res) => {
    ControllerPessoa.listar(req, res);
});

router.post('/', authSession, (req,res)=>{
    ControllerPessoa.Cadastro(req, res)
});

module.exports =  router;