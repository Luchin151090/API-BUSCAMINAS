import { createHistorial, getHistorialById, getHistorial, updateHistorial, deleteHistorialId } from "../controllers/historial_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerHistorial = express.Router()

routerHistorial.post('/historial',createHistorial)
routerHistorial.get('/historial/:historialId',getHistorialById)
routerHistorial.get('/historial',getHistorial)
routerHistorial.put('/historial/:historialId',updateHistorial)
routerHistorial.delete('/historial/:historialId',deleteHistorialId)
/* mas rutas aqui*/

// HOLA SOY LUISrouterModelo //


export default routerHistorial