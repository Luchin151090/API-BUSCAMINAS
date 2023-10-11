import { createParadero, getParaderoById, getParadero, updateParadero, deleteParaderoId } from "../controllers/paradero_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerParadero = express.Router()

routerParadero.post('/paradero',createParadero)
routerParadero.get('/paradero/:paraderoId',getParaderoById)
routerParadero.get('/paradero',getParadero)
routerParadero.put('/paradero/:paraderoId',updateParadero)
routerParadero.delete('/paradero/:paraderoId',deleteParaderoId)
/* mas rutas aqui*/

// HOLA SOY LUISrouterModelo //


export default routerParadero