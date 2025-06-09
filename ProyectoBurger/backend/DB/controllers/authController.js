const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const SECRET = '12345';

const authController = {
  login: async (req, res) => {
    try {
      const { correo, passw } = req.body;
      console.log("BODY Dentro de authController",req.body)

      const user = await UserModel.authenticate(correo, passw);
      console.log('Usuario encontrado:', user);

      if (user) {
        const token = jwt.sign(
          { 
            id: user.id,
            correo: user.correo,
            nombre: user.nombre,
            numero: user.numero,
            direccion: user.direccion
          }, 
          SECRET, 
          { expiresIn: '1h' }
        );
        return res.json({ 
          token,
          user: {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            numero: user.numero,
            direccion: user.direccion
          }
        });
      } else {
        return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ mensaje: 'Error del servidor' });
    }
  },

  perfil: (req, res) => {
    res.json({ usuario: req.user });
  }

  
};

module.exports = authController;