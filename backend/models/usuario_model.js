
import {connection} from '../config.js'; 

const UsuarioModel = {
  // Create (Crear) - Crear un nuevo usuario
  createUsuario: (nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id) => {
    const sql = 'INSERT INTO usuario (nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id], (err, result) => {
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
  updateUsuario: (nombres, apellidos, nickname, correo, contrasenia, dni, id_usuario, bus_id, paradero_id, callback) => {
    const sql = 'UPDATE usuario SET nombres = ?, apellidos = ?, nickname = ?, correo = ?, contrasenia = ?, dni = ?, bus_id = ?, paradero_id = ? WHERE id_usuario = ?';
    connection.query(sql, [nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id, id_usuario], (err, result) => {
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