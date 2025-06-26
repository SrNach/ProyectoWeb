const sgMail = require('@sendgrid/mail');

const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') }); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Envía un correo de recuperación de contraseña
 * @param {string} to - Email del destinatario
 * @param {string} token - Token único para reset
 */
function sendResetEmail({to, token}) {
  const resetUrl = `http://localhost:4200/reset-password/${token}`;
  const msg = {
    to,
    from: process.env.EMAIL_FROM,
    subject: 'Restablecimiento de contraseña',
    html: `
      <h2>Recuperación de contraseña</h2>
      <p>Ingresa este código para restablecer tu contraseña</p>
      <a href="${token}">${token}</a>
      <p>Si no solicitaste esto, puedes ignorar este mensaje.</p>
      <p>The Burger.</p>
    `,
  };

  return sgMail.send(msg);
}

module.exports = { sendResetEmail };
