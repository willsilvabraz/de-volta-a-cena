const db = require('../config/Firebase.js');

class Pessoas {
  static async Cadastro(data) {
    const docRef = await db.collection('pessoas').add(data);
    return docRef.id;
  }

  static async listar(){
    const docref = await db.collection('pessoas').get()
    return docref.docs;
  }
}

module.exports = Pessoas;