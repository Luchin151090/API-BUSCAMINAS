
import express from 'express';
import routerModelo from './routes/modelo_route.js';
import routerBus from './routes/bus_route.js';
import routerRuta from './routes/ruta_route.js';
import routerUsuario from './routes/usuario_route.js';
import routerParadero from './routes/paradero_route.js';
import routerHistorial from './routes/historial_route.js';
import { connection } from './config.js'; // Importa la conexión de config.js

import morgan from 'morgan';
import cors from 'cors';

// Instanciamos una "app" de la función express
const app = express()



app.use(cors());

// Configuramos el puerto del servidor
const port = 8003
app.use(express.json())
app.use(morgan('combined'))
app.use('/api', routerModelo)
app.use('/api', routerBus)
app.use('/api', routerRuta)
app.use('/api', routerUsuario)
app.use('/api', routerParadero)
app.use('/api', routerHistorial)

app.listen(port, () => {
    console.log("Servidor en: http://127.0.0.1:${port}")
})


// API endpoint for login
app.post('/login', (req, res) => {
    const { nickname, contrasenia } = req.body;
  
    // Perform your authentication logic here
    // For simplicity, this example checks if the nickname and password match a user in the database
    const query = `SELECT * FROM usuario WHERE nickname = ? AND contrasenia = ?`;
    connection.query(query, [nickname, contrasenia], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          // Successful login
          res.json({ success: true, message: 'Login successful' });
        } else {
          // Incorrect nickname or password
          res.json({ success: true, message: 'Login failed' });
        }
      }
    });
  });
