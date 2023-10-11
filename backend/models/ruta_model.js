
import {connection} from '../config.js'

const RutaModel = {
  // Create (Crear) - Crear un nueva ruta
  createRuta: (origen,destino,distancia_km,tiempo_minutos,callback) => {
    const sql = 'INSERT INTO ruta (origen,destino,distancia_km,tiempo_minutos) VALUES (?, ?, ?, ?)';
    connection.query(sql, [origen,destino,distancia_km,tiempo_minutos], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un ruta por ID
  getRutaId: (rutaId, callback) => {
    const sql = 'SELECT * FROM ruta WHERE id_ruta = ?';
    connection.query(sql, [rutaId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

    // Read (Leer) - Obtener un ruta por ID
  getRutas: (callback) => {
        const sql = 'SELECT * FROM ruta';
        connection.query(sql, (err, rows) => {
          if (err) {
            return callback(err);
          }
          return callback(null, rows);
        });
  },

  // Update (Actualizar) - Actualizar información de ruta
  updateRuta: (rutaId,origen,destino,distancia_km,tiempo_minutos, callback) => {
    const sql = 'UPDATE ruta SET origen = ?, destino = ?, distancia_km = ?, tiempo_minutos = ? WHERE id_ruta = ?';
    connection.query(sql, [origen,destino,distancia_km,tiempo_minutos,rutaId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar una ruta por ID
  deleteRuta: (rutaId, callback) => {
    const sql = 'DELETE FROM ruta WHERE id_ruta = ?';
    connection.query(sql, [rutaId], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Otras funciones CRUD según tus necesidades
};

export default RutaModel;
