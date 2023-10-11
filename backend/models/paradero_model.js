// Ejemplo de operaciones CRUD en un modelo de usuario

const db = require('../config/database'); // Importa la configuración de la base de datos

const ParaderoModel = {
  // Create (Crear) - Crear un nuevo Paradero
  createParadero: (nombre, latitud, longitud, callback) => {
    const sql = 'INSERT INTO paradero (nombre, latitud, longitud) VALUES (?, ?, ?)';
    db.query(sql, [nombre, latitud, longitud], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un Paradero por ID
  getParaderoById: (id_paradero, callback) => {
    const sql = 'SELECT * FROM paradero WHERE id_paradero = ?';
    db.query(sql, [id_paradero], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

  // Read (Leer) - Obtener un todos los Paradero
  getParadero: (callback) => {
    const sql = 'SELECT * FROM paradero';
    db.query(sql, (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

  // Update (Actualizar) - Actualizar información de Paradero
  updateParadero: (nombre, latitud, longitud, id_paradero, callback) => {
    const sql = 'UPDATE paradero SET nombre = ?, latitud = ?, longitud = ? WHERE id_paradero = ?';
    db.query(sql, [nombre, latitud, longitud, id_paradero], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un Paradero por ID
  deleteParadero: (id_paradero, callback) => {
    const sql = 'DELETE FROM paradero WHERE id_paradero = ?';
    db.query(sql, [id_paradero], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

};

module.exports = ParaderoModel;