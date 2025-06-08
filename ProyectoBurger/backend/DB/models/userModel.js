const db = require('../config/db');

const UserModel = {
  getAll: (callback) => {
    db.query('SELECT id, correo FROM cliente', callback);
  },

  create: (user, callback) => {
    db.query('INSERT INTO cliente SET ?', user, callback);
  },

  findByEmail: (correo, callback) => {
    db.query(
      'SELECT * FROM cliente WHERE correo = ? LIMIT 1', 
      [correo], 
      (err, results) => {
        if (err) return callback(err);
        callback(null, results[0] || null);
      }
    );
  }
};

module.exports = UserModel;