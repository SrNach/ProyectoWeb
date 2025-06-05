const express = require('express');
const userRoutes = require('./DB/routes/userRoute');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET = '12345';
app.use('/usuarios', userRoutes);

// Configuración CORS: solo permite frontend en localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(cors());


app.use(express.json());

// Ruta pública de login (autenticación)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulación simple (en producción usa base de datos)
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
});

// Middleware para verificar token (autorización)
function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ mensaje: 'Token requerido' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ mensaje: 'Token inválido' });
    req.user = user;
    next();
  });
}

// Ruta protegida
app.get('/perfil', verificarToken, (req, res) => {
  res.json({
    mensaje: 'Acceso autorizado',
    usuario: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});