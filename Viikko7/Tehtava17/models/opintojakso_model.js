const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Nimi,Koodi,Laajuus) values(?,?,?)',
      [opintojakso.Nimi, opintojakso.Koodi, opintojakso.Laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Nimi=?,Koodi=?, Laajuus=? where idOpintojakso=?',
      [opintojakso.Nimi, opintojakso.Koodi, opintojakso.Laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;