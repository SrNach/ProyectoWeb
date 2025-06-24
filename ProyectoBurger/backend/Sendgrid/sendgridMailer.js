const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Envía un correo de recuperación de contraseña
 * @param {string} to - Email del destinatario
 * @param {string} token - Token único para reset
 */
function sendResetEmail(to, token) {
  const resetUrl = `http://localhost:4200/reset-password/${token}`;
  const msg = {
    to,
    from: process.env.EMAIL_FROM,
    subject: 'Restablecimiento de contraseña',
    html: `
      <h2>Recuperación de contraseña</h2>
      <p>Haz clic en el siguiente enlace para establecer una nueva contraseña:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>Si no solicitaste esto, puedes ignorar este mensaje.</p>
      <p>The Burger.</p>
    `,
  };

  return sgMail.send(msg);
}

module.exports = { sendResetEmail };
