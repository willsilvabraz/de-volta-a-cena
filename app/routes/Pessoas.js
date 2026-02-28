const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        Chave : 'Valor',
        Status : 'OK'
    });
});

router.post('/', (req, res) =>{
    const body = req.body;

    res.json(Object.values(body)[0]);
});

module.exports =  router;