const express = require('express');
const cors = require('cors');
const path = require('path');
const { sendResetEmail } = require('./Sendgrid/sendgridMailer');
const userRoutes = require('./DB/routes/userRoute');
const authRoutes = require('./DB/routes/authRoute');
const BurgerMenu = require("./apidata.json");

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8100'];
const resetTokens = {};

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/api/usuarios', userRoutes);
app.use('/auth', authRoutes);


app.get('/api/data', (req, res) => {
  res.status(200).json(BurgerMenu);
});


app.post('/api/verify-token', (req, res) => {
  const { correo, token } = req.body;

  if (!resetTokens[correo]) {
    return res.status(400).json({ 
      valid: false, 
      message: 'No existe solicitud de recuperación para este email' 
    });
  }

  if (resetTokens[correo].token !== token) {
    return res.status(400).json({ 
      valid: false, 
      message: 'Token inválido' 
    });
  }

  if (Date.now() > resetTokens[correo].expires) {
    delete resetTokens[correo];
    return res.status(400).json({ 
      valid: false, 
      message: 'Token expirado' 
    });
  }

  res.json({ 
    valid: true, 
    message: 'Token válido',
  });
});

app.post('/api/pass-reset', async (req, res) => {
  const { correo } = req.body;

  if (!correo || !correo.includes('@')) {
    return res.status(400).json({ 
      message: 'Email inválido' 
    });
  }

  const token = generarToken6Digitos();
  resetTokens[correo] = { 
    token, 
    expires: Date.now() + 15 * 60 * 1000 // 15 minutos
  };

  try {
    await sendResetEmail({ 
      to: correo, 
      token 
    });
    
    res.json({ 
      message: 'Código enviado con éxito',
      hint: 'Revisa tu bandeja de entrada o spam' 
    });
  } catch (err) {
    console.error('Error en sendResetEmail:', err);
    
    delete resetTokens[correo];
    
    res.status(500).json({ 
      message: 'Error al enviar el correo',
      systemError: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

function generarToken6Digitos() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

setInterval(() => {
  for (const [email, data] of Object.entries(resetTokens)) {
    if (Date.now() > data.expires) {
      delete resetTokens[email];
    }
  }
}, 60 * 60 * 1000); // Cada hora

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});