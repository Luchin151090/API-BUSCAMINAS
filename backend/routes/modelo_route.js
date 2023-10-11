import { createModelo,getModelo,getModelos,updateModelo,deleteModeloId } from "../controllers/modelo_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerModelo = express.Router()

routerModelo.post('/modelo',createModelo)
routerModelo.get('/modelo/:modeloId',getModelo)
routerModelo.get('/modelo',getModelos)
routerModelo.put('/modelo/:modeloId',updateModelo)
routerModelo.delete('/modelo/:modeloId',deleteModeloId)
/* mas rutas aqui*/



export default routerModelo