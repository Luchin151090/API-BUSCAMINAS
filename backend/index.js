import express from 'express';
import routerModelo from './routes/modelo_route.js';
import routerBus from './routes/bus_route.js';
import routerRuta from './routes/ruta_route.js';

import morgan from 'morgan';

// Instanciamos una "app" de la función express
const app = express()

// Configuramos el puerto del servidor
const port = 8003
app.use(express.json())
app.use(morgan('combined'))
app.use('/api',routerModelo)
app.use('/api',routerBus)
app.use('/api',routerRuta)



app.listen(port,()=>{
    console.log(`Servidor en: http://127.0.0.1:${port}`)
})


