const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',  
  password: '', 
  database: 'notas'
});


connection.connect((error) => {
  if (error) {
    console.error('Error de conexión a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = connection;

