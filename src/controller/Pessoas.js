const ModeloPessoa = require('../models/Pessoas.js');

class ControllerPessoa {
  static async Cadastro(req, res) {
    try {
      const id = await ModeloPessoa.Cadastro({
        nome: "Willia",
        profissao: "Dev",
        criadoEm: new Date()
      });

      res.status(201).json({
        message: "Cadastrado com sucesso",
        id: id
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ControllerPessoa;