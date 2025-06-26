CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `numero` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `passw` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo_unico` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cliente` (`nombre`, `numero`, `direccion`, `correo`, `passw`) VALUES
('Ignacio Silva Rubio', 972727272, 'Calle falsisisma 123', 'ignacio.silva.r@mail.pucv.cl', '$2b$10$4Nt/mxoeMFMEro2cMx3T..Nx1oap1Io6RkNCXHRkYBdBIo6G0q8ly'),
('Davor Serey', 912231234, 'Calle realisiisisisisima 435', 'davor.serey.g@mail.pucv.cl', '$2b$10$z.2bvSNxYuRD9W/.AWmHQekMo2s5/dkMBGPXvvEsVC5CRlOLsTayS'),
('Don Test', 999999999, 'Avenida Brasil 567', 'test@test.com', '$2b$10$mtwl873MPiL2N6vPoXa.BeGtKrdVpyixIq4vwsFNTfDrwBpgee5Wa');