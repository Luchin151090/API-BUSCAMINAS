import { createUsuario, getUsuarioById, getUsuario, updateUsuario, deleteUsuarioId } from "../controllers/usuario_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerUsuario = express.Router()

routerUsuario.post('/usuario',createUsuario)
routerUsuario.get('/usuario/:usuarioId',getUsuarioById)
routerUsuario.get('/usuario',getUsuario)
routerUsuario.put('/usuario/:usuarioId',updateUsuario)
routerUsuario.delete('/usuario/:usuarioId',deleteUsuarioId)
/* mas rutas aqui*/

// HOLA SOY LUISrouterModelo //


export default routerUsuario