import { createRuta,getRuta,getRutas,updateRuta,deleteRutaId} from "../controllers/ruta_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerRuta = express.Router()

routerRuta.post('/ruta',createRuta)
routerRuta.get('/ruta/:rutaId',getRuta)
routerRuta.get('/ruta',getRuta)
routerRuta.put('/ruta/:rutaId',updateRuta)
routerRuta.delete('/ruta/:rutaId',deleteRutaId)
/* mas rutas aqui*/

export default routerRuta