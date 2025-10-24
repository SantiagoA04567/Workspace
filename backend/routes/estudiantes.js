const express = require('express');
const router = express.Router();
const db = require('../db');
// Obtener todos los estudiantes
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiante', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Obtener estudiante por documento
router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiante WHERE documento_identidad = ?', 
        [doc], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length == 0) 
            return res.status(404).json({ mensaje:'Estudiante no encontrado'});
        res.json(results[0]);
    });
});

router.delete('/:documento_identidad', (req, res)=>{
    const doc = req.params.documento_identidad;
     db.query('DELETE FROM estudiante WHERE documento_identidad = ?', 
        [doc], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length == 0) 
            return res.status(404).json({ mensaje:'Estudiante no encontrado'});
        res.json(results[0]);
    });
});
router.post('/', (req,res)=> {
     const {primer_nombre, segundo_nombre, apellido, fecha_nacimiento,
        documento_identidad, genero} = req.body;
        const query =`INSERT INTO estudiante (primer_nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [primer_nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad,genero], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al insertar estudiante', detalle: err});
            }
            res.status(201).json({mensaje: 'Estudiante agregado exitosamente', id_insertado: results.insertId
            });
        });
    });


router.put('/:documento_identidad', (req, res) => {
  const { documento_identidad } = req.params;
  const {
    primer_nombre,
    segundo_nombre,
    apellido,
    fecha_nacimiento,
    genero
  } = req.body;

  // Validación básica
  if (!primer_nombre || !apellido) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const query = `
    UPDATE estudiante
    SET primer_nombre = ?, segundo_nombre = ?, apellido = ?, fecha_nacimiento = ?, genero = ?
    WHERE documento_identidad = ?
  `;

  db.query(
    query,
    [
      primer_nombre,
      segundo_nombre,
      apellido,
      fecha_nacimiento,
      genero,
      documento_identidad
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: 'Error al actualizar estudiante',
          detalle: err
        });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({
          error: 'Estudiante no encontrado con ese documento'
        });
      }

      res.json({
        mensaje: 'Estudiante actualizado exitosamente'
      });
    }
  );
});
