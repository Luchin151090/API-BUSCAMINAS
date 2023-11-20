
import {connection} from '../config.js'; 

const UsuarioModel = {
  // Create (Crear) - Crear un nuevo usuario
  createUsuario: (nombres, nickname, correo, contrasenia, dni, callback) => {
    const sql = 'INSERT INTO usuario (nombres, nickname, correo, contrasenia, dni) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [nombres, nickname, correo, contrasenia, dni], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Read (Leer) - Obtener un usuario por ID
  getUsuarioById: (id_usuario, callback) => {
    const sql = 'SELECT * FROM usuario WHERE id_usuario = ?';
    connection.query(sql, [id_usuario], (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows[0]);
    });
  },

  // Read (Leer) - Obtener un todos los usuarios
  getUsuario: (callback) => {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql, (err, rows) => {
      if (err) {
        return callback(err);
      }
      return callback(null, rows);
    });
  },

  // Update (Actualizar) - Actualizar información de usuario
  updateUsuario: (id_usuario, nombres, nickname, correo, contrasenia, dni, bus_id, paradero_id, callback) => {
    const sql = 'UPDATE usuario SET nombres = ?, nickname = ?, correo = ?, contrasenia = ?, dni = ? WHERE id_usuario = ?';
    connection.query(sql, [nombres, nickname, correo, contrasenia, dni, id_usuario], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  // Delete (Eliminar) - Eliminar un usuario por ID
  deleteUsuario: (id_usuario, callback) => {
    const sql = 'DELETE FROM usuario WHERE id_usuario = ?';
    connection.query(sql, [id_usuario], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

};

export default UsuarioModel;