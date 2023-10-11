import { createBus,getBus,getBuses,updateBus,deleteBusId} from "../controllers/bus_controller.js";
import express from 'express';

// Creamos la instancia de la clase express
const routerBus = express.Router()

routerBus.post('/bus',createBus)
routerBus.get('/bus/:busId',getBus)
routerBus.get('/bus',getBuses)
routerBus.put('/bus/:busId',updateBus)
routerBus.delete('/bus/:busId',deleteBusId)
/* mas rutas aqui*/

export default routerBus