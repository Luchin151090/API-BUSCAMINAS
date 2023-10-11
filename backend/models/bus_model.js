
import {connection} from '../config.js'

const BusModel = {
  // Create (Crear) - Crear un nuevo bus
  createBus: (nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id,callback) => {
    const sql = 'INSERT INTO bus (nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un bus por ID
  getBusById: (busId, callback) => {
    const sql = 'SELECT * FROM bus WHERE id_bus = ?';
    connection.query(sql, [busId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

    // Read (Leer) - Obtener un bus por ID
  getBuses: (callback) => {
        const sql = 'SELECT * FROM bus';
        connection.query(sql, (err, rows) => {
          if (err) {
            return callback(err);
          }
          return callback(null, rows[0]);
        });
  },

  // Update (Actualizar) - Actualizar información de bus
  updateBus: (busId,nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id, callback) => {
    const sql = 'UPDATE bus SET nombre_empresa = ?, capacidad = ?, anio_fabricacion = ?, placa = ?, ruta_id = ?, modelo_id = ? WHERE id_bus = ?';
    connection.query(sql, [nombre_empresa,capacidad,anio_fabricacion,placa,ruta_id,modelo_id,busId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un usuario por ID
  deleteBus: (busId, callback) => {
    const sql = 'DELETE FROM bus WHERE id_bus = ?';
    connection.query(sql, [busId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Otras funciones CRUD según tus necesidades
};

export default BusModel;
