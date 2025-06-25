const UserModel = require('../models/userModel');
const sanitizeHtml = require('sanitize-html');
const validator = require('validator');
const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

const UserController = {
  index: (req, res) => {
    UserModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },
  store: (req, res) => {
    const newUser = req.body;
    UserModel.create(newUser, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, ...newUser });
    });
  },

  register: async (req, res) => {
    try {
      let { nombre, correo, passw, passwConfirm, direccion, numero } = req.body;
      
      if (!nombre || !correo || !passw || !passwConfirm || !direccion || !numero) {
        return res.status(400).json({ 
          success: false,
          message: 'No se tienen todos los campos requeridos' 
        });
      }

      nombre = sanitizeHtml(nombre);
      direccion = sanitizeHtml(direccion);

      if (!validator.isEmail(correo)) {
        return res.status(400).json({ message: 'El correo ingresado es inválido' });
      }

      if (!phoneRegex.test(numero)) {
        return res.status(400).json({ message: 'El número telefónico ingresado es inválido' });
      }

      if (userData.passw !== userData.passwConfirm) {
        return res.status(400).json({ message: 'Las contraseñas ingresadas no coinciden' });
      }


      const newUser = {
        nombre,
        correo,
        passw,
        direccion,
        numero,
      };

      const createdUser = await UserModel.createUser(newUser);
      
      res.status(201).json({
        success: true,
        user: {
          id: createdUser.id,
          nombre: createdUser.nombre,
          correo: createdUser.correo,
          numero: createdUser.numero,
          direccion: createdUser.direccion,
        }
      });
    } catch (error) {
      console.error('Error en registro:', error);
      
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({
          success: false,
          message: 'El correo electrónico ya está registrado'
        });
      }
      
      res.status(500).json({
        success: false,
        message: 'Error al registrar usuario'
      });
    }
  },
};

module.exports = UserController;
