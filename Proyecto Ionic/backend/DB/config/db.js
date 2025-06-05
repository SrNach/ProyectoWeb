const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,   
  user: "root",
  password: "",
  database: "Usuarios"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
