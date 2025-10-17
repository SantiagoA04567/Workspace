-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2025 a las 23:22:01
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
  `documento_identidad` varchar(20) NOT NULL,
  `primer_nombre` varchar(50) NOT NULL,
  `segundo_nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` enum('Masculino','Femenino','Otro') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`documento_identidad`, `primer_nombre`, `segundo_nombre`, `apellidos`, `fecha_nacimiento`, `genero`) VALUES
('10000001', 'Juan', 'Carlos', 'Pérez Gómez', '2005-03-14', 'Masculino'),
('10000002', 'Ana', 'María', 'López Rodríguez', '2004-07-22', 'Femenino'),
('10000003', 'Luis', NULL, 'Martínez Díaz', '2006-01-30', 'Masculino'),
('10000004', 'Sofía', 'Isabel', 'García Torres', '2005-11-10', 'Femenino'),
('10000005', 'Miguel', 'Ángel', 'Ramírez Sánchez', '2003-05-05', 'Masculino'),
('10000006', 'Valentina', NULL, 'Castillo Romero', '2004-09-18', 'Femenino'),
('10000007', 'Carlos', 'Andrés', 'Fernández Ruiz', '2006-12-01', 'Masculino'),
('10000008', 'Laura', 'Beatriz', 'Moreno Vargas', '2005-06-07', 'Femenino'),
('10000009', 'José', NULL, 'Ortega Navarro', '2003-02-25', 'Masculino'),
('10000010', 'Camila', 'Alejandra', 'Ramos Herrera', '2004-08-15', 'Femenino'),
('10000011', 'Andrés', 'Felipe', 'Gómez Peña', '2006-03-21', 'Masculino'),
('10000012', 'Mariana', NULL, 'Suárez León', '2005-10-03', 'Femenino'),
('10000013', 'Diego', 'Esteban', 'Paredes Rivas', '2003-04-12', 'Masculino'),
('10000014', 'Daniela', 'Lucía', 'Cruz Molina', '2004-12-09', 'Femenino'),
('10000015', 'Alex', NULL, 'Vega Salazar', '2005-01-17', 'Otro');

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
