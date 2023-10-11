// Ejemplo de operaciones CRUD en un modelo de usuario

const db = require('../config/database'); // Importa la configuración de la base de datos

const BusModel = {
  // Create (Crear) - Crear un nuevo usuario
  createBus: (nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id,callback) => {
    const sql = 'INSERT INTO bus (nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un usuario por ID
  getBusById: (busId, callback) => {
    const sql = 'SELECT * FROM bus WHERE id_bus = ?';
    db.query(sql, [busId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

    // Read (Leer) - Obtener un usuario por ID
    getBuses: (callback) => {
        const sql = 'SELECT * FROM bus';
        db.query(sql, (err, rows) => {
          if (err) {
            return callback(err);
          }
          return callback(null, rows[0]);
        });
      },

  // Update (Actualizar) - Actualizar información de usuario
  updateBus: (busId,nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id, callback) => {
    const sql = 'UPDATE bus SET nombre_empresa = ?, capacidad = ?, anio_fabricacion = ?, placa = ?, ruta_id = ?, modelo_id = ? WHERE id_bus = ?';
    db.query(sql, [nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id,busId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un usuario por ID
  deleteUser: (busId, callback) => {
    const sql = 'DELETE FROM bus WHERE id_bus = ?';
    db.query(sql, [busId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Otras funciones CRUD según tus necesidades
};

export default BusModel;
