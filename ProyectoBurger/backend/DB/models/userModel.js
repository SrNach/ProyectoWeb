const db = require('../config/db');

const UserModel = {
  authenticate: (correo, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT id, correo, nombre, direccion, numero FROM cliente WHERE correo = ? AND passw = ?',
        [correo, password],
        (err, results) => {
          if (err) return reject(err);
          resolve(results.length > 0 ? results[0] : null);
        }
      );
    });
  },

  getAll: (callback) => {
    db.query('SELECT * FROM cliente', callback);
  },
  
  createUser: (userData) => {
    return new Promise((resolve, reject) => {
    const userToCreate = { ...userData };
    delete userToCreate.id;
    delete userToCreate.confirmPassw;

    if (!userToCreate.nombre || !userToCreate.correo || !userToCreate.passw) {
      return reject(new Error('Nombre, correo y contraseña son requeridos'));
    }
      db.query(
        'INSERT INTO cliente SET ?',
        userData,
        (err, results) => {
          if (err) return reject(err);
          resolve({ id: results.insertId, ...userData });
        }
      );
    });
  }
};

module.exports = UserModel;