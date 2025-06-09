const express = require('express');
const userRoutes = require('./DB/routes/userRoute');
const authRoutes = require('./DB/routes/authRoute');
const cors = require('cors');
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8100'];

const app = express();
const PORT = 3000;

// Configuración CORS
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

// Rutas
app.use('/api/usuarios', userRoutes);
app.use('/auth', authRoutes); // Autenticación

// Ruta para datos estáticos
const BurgerMenu = require("./apidata.json");
app.get('/api/data', (req, res) => {
  res.status(200).json(BurgerMenu);
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});