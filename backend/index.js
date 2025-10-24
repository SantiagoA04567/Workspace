const express = require('express');
const cors = require('cors');
//por cada tabla
const estudiantesRoutes = require('./routes/estudiantes');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
//por cada table
app.use('/api/estudiantes', estudiantesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor http://localhost:${PORT}`);
});
