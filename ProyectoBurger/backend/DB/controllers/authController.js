const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const SECRET = process.env.JWT_SECRET;

const AuthController = {
  login: (req, res) => {
    const { correo, passw } = req.body;

    //if (!correo || !passw) {
      //  console.log("El mismo 400 de siempre f", req.body);
      //return res.status(400).json({ mensaje: 'Correo y contraseña requeridos' });
    //}



    UserModel.findByEmail(correo, (err, user) => {
      if (err) {
        console.error('Error en consulta:', err);
        return res.status(500).json({ mensaje: 'Error de servidor' });
      }

      if (!user) {
        console.log("Error usuario", user)
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      // Comparación de contraseñas
      if (user.passw !== passw) {
        console.log("Error contraseña", user)
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      const token = jwt.sign(
        { id: user.id, correo: user.correo },
        SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, user: { correo: user.correo, id: user.id } });
    });
  }
};

module.exports = AuthController;