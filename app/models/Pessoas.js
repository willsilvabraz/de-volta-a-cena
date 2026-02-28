const db = require('../config/firebase.js');

class Pessoas {
  static async Cadastro(data) {
    const docRef = await db.collection('pessoas').add(data);
    return docRef.id;
  }
}

module.exports = Pessoas;