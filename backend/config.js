import mysql2 from 'mysql2';

export const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'buscaminas',
});

try {
    connection.connect();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}

