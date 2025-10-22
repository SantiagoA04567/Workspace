-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2025 a las 23:27:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `primer_nombre` varchar(50) NOT NULL,
  `segundo_nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `documento_identidad` varchar(20) NOT NULL,
  `genero` enum('M','F','O') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`primer_nombre`, `segundo_nombre`, `apellido`, `fecha_nacimiento`, `documento_identidad`, `genero`) VALUES
('Natalia', NULL, 'Mendoza', '2004-07-16', '1178901234', 'F'),
('Santiago', 'Felipe', 'Guerrero', '2003-10-29', '1189012345', 'M'),
('Camila', 'Andrea', 'Núñez', '2005-01-24', '1190123456', 'F'),
('Fabián', NULL, 'Ríos', '2004-05-11', '1201234567', 'M'),
('Daniela', 'Sofía', 'Ochoa', '2003-12-07', '1212345678', 'F'),
('Alejandro', 'Daniel', 'Paz', '2005-08-20', '1223456789', 'M'),
('Viviana', NULL, 'Quintero', '2004-02-14', '1234567890', 'F'),
('Héctor', 'Manuel', 'Reyes', '2003-06-28', '1245678901', 'M'),
('Jimena', 'Marcela', 'Soto', '2005-04-09', '1256789012', 'F'),
('Pablo', 'Jesús', 'Toro', '2004-09-02', '1267890123', 'M'),
('Adriana', NULL, 'Uribe', '2003-01-05', '1278901234', 'F'),
('Benjamín', 'David', 'Velasco', '2005-11-27', '1289012345', 'M'),
('Regina', 'Nicole', 'Yepes', '2004-06-19', '1290123456', 'F'),
('Mauricio', NULL, 'Zúñiga', '2003-09-15', '1301234567', 'M');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`documento_identidad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
