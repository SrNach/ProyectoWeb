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
        return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ message: 'Error del servidor' });
    }
  },

  perfil: (req, res) => {
    res.json({ usuario: req.user });
  },

  changePassword: async (req, res) => {
    const { correo, passw } = req.body;
    
    try {
      if (!correo || !passw) {
        return res.status(400).json({ 
          success: false, 
          message: 'Correo y contraseña son requeridos' 
        });
      }
      console.log("BODY authController ANTES",req.body)
      const updated = await UserModel.updatePassword(correo, passw);
      console.log("BODY authController DESPUES",req.body)
      if (updated) {
        res.json({ success: true, message: 'Contraseña actualizada' });
      } else {
        res.status(404).json({ success: false, message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: 'Error al cambiar contraseña',
        //error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  },

  
};

module.exports = authController;