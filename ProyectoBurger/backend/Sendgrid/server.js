const express = require('express');
const crypto = require('crypto');
const { sendResetEmail } = require('./sendgridMailer');

require('dotenv').config();

const app = express();
app.use(express.json());

const resetTokens = {};


app.post('/api/pass-reset', async (req, res) => {
  const { correo } = req.body;

  const token = generarToken6Digitos();
  resetTokens[correo] = { token, expires: Date.now() + 15 * 60 * 1000 };

  try {
    await sendgrid.send({
      to: correo,
      from: process.env.EMAIL_FROM,
      subject: 'Código de verificación',
      html: `
        <p>Tu código de recuperación es: <strong>${token}</strong></p>
        <p>Ingresa este código en la página para restablecer tu contraseña.</p>
      `,
    });

    res.json({ message: 'Código enviado con éxito' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

function generarToken6Digitos() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
