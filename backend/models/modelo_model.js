
import {connection} from '../config.js';

const ModeloModel = {
  // Create (Crear) - Crear un nuevo modelo
  createModelo: (nombre,callback) => {
    const sql = 'INSERT INTO modelo (nombre) VALUES (?)';
    connection.query(sql, [nombre], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un modelo por ID
  getModeloId: (modeloId, callback) => {
    const sql = 'SELECT * FROM modelo WHERE id_modelo = ?';
    connection.query(sql, [modeloId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

    // Read (Leer) - Obtener un modelo por ID
  getModelos: (callback) => {
        const sql = 'SELECT * FROM modelo';
        connection.query(sql, (err, rows) => {
          if (err) {
            return callback(err);
          }
          return callback(null, rows);
        });
      },

  // Update (Actualizar) - Actualizar información de modelo
  updateModelo: (modeloId,nombre,callback) => {
    const sql = 'UPDATE modelo SET nombre = ? WHERE id_modelo = ?';
    connection.query(sql, [nombre,modeloId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un modelo por ID
  deleteModelo: (modeloId, callback) => {
    const sql = 'DELETE FROM modelo WHERE id_modelo = ?';
    connection.query(sql, [modeloId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

};

export default ModeloModel;
