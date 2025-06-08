const db = require('../config/db');

const UserModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM cliente', callback);
  },
  create: (user, callback) => {
    db.query('INSERT INTO cliente SET ?', user, callback);
  }
};

module.exports = UserModel;
