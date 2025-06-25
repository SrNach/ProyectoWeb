const express = require('express');
const crypto = require('crypto');
const { sendResetEmail } = require('./sendgridMailer');

require('dotenv').config();

const app = express();
app.use(express.json());

const resetTokens = {}; // ⚠ Simulación (en memoria)

app.post('/api/request-password-reset', async (req, res) => {
  const { email } = req.body;

  // Aquí deberías verificar si el email existe en tu base de datos
  const token = crypto.randomBytes(32).toString('hex');
  resetTokens[token] = { email, expires: Date.now() + 3600000 }; // 1 hora

  try {
    await sendResetEmail(email, token);
    res.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar correo:', error.response?.body || error);
    res.status(500).json({ message: 'Fallo al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
