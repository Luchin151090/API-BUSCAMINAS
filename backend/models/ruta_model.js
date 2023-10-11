// Ejemplo de operaciones CRUD en un modelo de usuario
/*
const db = require('../config/database'); // Importa la configuración de la base de datos

const ModeloModel = {
  // Create (Crear) - Crear un nuevo usuario
  createBus: (nombre,callback) => {
    const sql = 'INSERT INTO ruta (origen,destino,distancia_km,tiempo_minutos) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un usuario por ID
  getBusById: (busId, callback) => {
    const sql = 'SELECT * FROM modelo WHERE id_modelo = ?';
    db.query(sql, [busId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

    // Read (Leer) - Obtener un usuario por ID
    getBuses: (callback) => {
        const sql = 'SELECT * FROM modelo';
        db.query(sql, (err, rows) => {
          if (err) {
            return callback(err);
          }
          return callback(null, rows[0]);
        });
      },

  // Update (Actualizar) - Actualizar información de usuario
  updateBus: (modeloId, callback) => {
    const sql = 'UPDATE modelo SET nombre = ? WHERE id_modelo = ?';
    db.query(sql, [nombre,modeloId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un usuario por ID
  deleteUser: (modeloId, callback) => {
    const sql = 'DELETE FROM modelo WHERE id_modelo = ?';
    db.query(sql, [modeloId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Otras funciones CRUD según tus necesidades
};

export default ModelModel;
*/