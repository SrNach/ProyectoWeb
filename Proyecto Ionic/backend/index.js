const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ruta de ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Express!' });
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});