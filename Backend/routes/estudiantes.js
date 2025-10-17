// routes/estudiantes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener todos los estudiantes
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM estudiante';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener estudiantes:', err);
      return res.status(500).json({ error: 'Error al obtener estudiantes' });
    }p
    res.json(results);
  });
});

router.get('/:documento_identidad', (req, res) => {
  const documento = req.params.documento_identidad;
  const sql = 'SELECT * FROM estudiante WHERE documento_identidad = ?';

  db.query(sql, [documento], (err, results) => {
    if (err) {
      console.error('Error al obtener estudiante:', err);
      return res.status(500).json({ error: 'Error al obtener estudiante' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.json(results[0]);
  });
});

module.exports = router;