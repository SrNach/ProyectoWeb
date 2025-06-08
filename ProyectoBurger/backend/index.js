const express = require('express');
const userRoutes = require('./DB/routes/userRoute');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8100'];

const app = express();
const PORT = 3000;
const SECRET = '12345';


// Configuración CORS: solo permite frontend en localhost:3000
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use('/usuarios', userRoutes);
// API
const BurgerMenu = require("./apidata.json");
//console.log(BurgerMenu);
const ruta=express.Router();

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/apidata.json');
  res.status(200).json(BurgerMenu)
});
app.use("/api",ruta);



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