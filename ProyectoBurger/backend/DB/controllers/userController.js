const UserModel = require('../models/userModel');

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
      const { nombre, correo, passw, direccion, numero } = req.body;
      
      // Validación básica
      if (!nombre || !correo || !passw) {
        return res.status(400).json({ 
          success: false,
          message: 'Nombre, correo y contraseña son requeridos' 
        });
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
          direccion: createdUser.direccion
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
