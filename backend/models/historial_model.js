
import {connection} from '../config.js'; 


const HistorialModel = {
  // Create (Crear) - Crear un nuevo Historial
  createHistorial: (usuario_id, callback) => {
    const sql = 'INSERT INTO historial (usuario_id) VALUES (?)';
    connection.query(sql, [usuario_id], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un Historial por ID
  getHistorialById: (id_historial, callback) => {
    const sql = 'SELECT * FROM historial WHERE id_historial = ?';
    connection.query(sql, [id_historial], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

  // Read (Leer) - Obtener un todos los Historial
  getHistorial: (callback) => {
    const sql = 'SELECT * FROM historial';
    connection.query(sql, (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows);
    });
  },

  // Update (Actualizar) - Actualizar información de Historial
  updateHistorial: (usuario_id, id_historial, callback) => {
    const sql = 'UPDATE historial SET usuario_id = ? WHERE id_historial = ?';
    connection.query(sql, [usuario_id, id_historial], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un Historial por ID
  deleteHistorial: (id_historial, callback) => {
    const sql = 'DELETE FROM historial WHERE id_historial = ?';
    connection.query(sql, [id_historial], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

};

export default HistorialModel;