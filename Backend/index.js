const express = require ('express');
const cors = require('cors');
//por cada tabla
const estudiantesRoutes = require('./routes/estudiantes');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
//por cada tabla
app.use('/api/estudiantes', estudiantesRoutes);
app.listen(PORT, () => { 
    console.log(`servidor https://localhost:${PORT}`);
});

