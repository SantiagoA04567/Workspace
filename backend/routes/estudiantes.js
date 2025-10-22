// Crear un estudiante
router.post('/', (req, res) => {
  const { documento_identidad, nombre, apellido, /* otros campos */ } = req.body;

  // Validar que vengan los datos mínimos necesarios
  if (!documento_identidad || !nombre || !apellido) {
    return res.status(400).json({ mensaje: 'Faltan datos obligatorios' });
  }

  // Insertar en la base de datos
  const sql = 'INSERT INTO estudiante (documento_identidad, nombre, apellido) VALUES (?, ?, ?)';
  db.query(sql, [documento_identidad, nombre, apellido], (err, result) => {
    if (err) {
      // Si es error de clave duplicada, por ejemplo
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ mensaje: 'Estudiante ya existe' });
      }
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ mensaje: 'Estudiante creado', id: result.insertId });
  });
});

// Actualizar un estudiante por documento_identidad
router.put('/:documento_identidad', (req, res) => {
  const doc = req.params.documento_identidad;
  const { nombre, apellido /* otros campos */ } = req.body;

  // Validar al menos un campo para actualizar
  if (!nombre && !apellido) {
    return res.status(400).json({ mensaje: 'Debe enviar al menos un campo para actualizar' });
  }

  // Construir la consulta dinámicamente según campos enviados
  let fields = [];
  let values = [];

  if (nombre) {
    fields.push('nombre = ?');
    values.push(nombre);
  }
  if (apellido) {
    fields.push('apellido = ?');
    values.push(apellido);
  }

  values.push(doc); // para la condición WHERE

  const sql = `UPDATE estudiante SET ${fields.join(', ')} WHERE documento_identidad = ?`;

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json({ mensaje: 'Estudiante actualizado correctamente' });
  });
});
