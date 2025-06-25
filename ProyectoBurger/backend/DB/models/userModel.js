const db = require('../config/db');
const bcrypt = require('bcrypt');

const UserModel = {
  authenticate: (correo, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT id, correo, nombre, direccion, numero, passw FROM cliente WHERE correo = ?',
      [correo],
      async (err, results) => {
        if (err) return reject(err);
        if (results.length === 0) return resolve(null);

        const user = results[0];

        try {
          const match = await bcrypt.compare(password, user.passw);
          if (match) {
            delete user.passw;
            resolve(user);
          } else {
            resolve(null);
          }
        } catch (compareErr) {
          reject(compareErr);
        }
      }
    );
  });
  },

  getAll: (callback) => {
    db.query('SELECT * FROM cliente', callback);
  },
  
  createUser: (userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userToCreate = { ...userData };
        delete userToCreate.id;
        delete userToCreate.passwConfirm;

        if (!userToCreate.nombre || !userToCreate.correo || !userToCreate.passw || !userToCreate.direccion || !userToCreate.numero) {
          return reject(new Error('Nombre, correo y contraseña son requeridos'));
        }

        userToCreate.passw = await bcrypt.hash(userToCreate.passw, 10);

        db.query(
          'INSERT INTO cliente SET ?',
          userToCreate,
          (err, results) => {
            if (err) return reject(err);
            resolve({ id: results.insertId, ...userToCreate, passw: undefined });
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
};

module.exports = UserModel;