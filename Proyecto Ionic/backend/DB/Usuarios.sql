CREATE DATABASE  IF NOT EXISTS `Usuarios`;
USE Usuarios;

CREATE TABLE IF NOT EXISTS cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  numero INT NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  passw VARCHAR(100) NOT NULL
);

INSERT INTO cliente (nombre, numero, direccion, correo, passw) VALUES
('Ignacio Silva', 972727272, 'Calle falsa 123', 'ignacio.silva.r@mail.pucv.cl', 'mainlim'),
('Davor Serey', 981818181, 'Calle full real 321', 'davor.serey.g@mail.pucv.cl', 'mainteach'),
('tester', 123456789, 'Calle de prueba 456', 'abc@example.pe', '1234');