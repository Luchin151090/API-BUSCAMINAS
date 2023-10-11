import RutaModel from '../models/ruta_model.js'

// Controlador para registrar una nueva ruta
export const createRuta = async (req, res) => {
  const { origen,destino,distancia_km,tiempo_minutos } = req.body;
 
  try {
    RutaModel.createRuta(origen,destino,distancia_km,tiempo_minutos, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'No se pudo registrar la ruta' });
      } else {
        res.status(201).json({ message: 'Ruta registrada con éxito' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar el modelo' });
  }
};

// Controlador para conseguir una ruta
export const getRuta = async (req,res) => {
    const rutaId = req.params.rutaId

    try{
        RutaModel.getRutaId(rutaId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener la ruta'})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    catch(error) {
        res.status(500).json({error:'Error obtener modelo'})
    }
}

// Controlador para conseguir todas las rutas
export const getRutas = async (req,res) => {
    
    try{
        RutaModel.getRutas((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver las rutas'})
            }
            else{
                res.status(200).json(result)
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error ${error}`})
    }
}

// Controlador para actualizar ruta
export const updateRuta = async (req,res) => {
    const rutaId = req.params.rutaId
    const { origen,destino,distancia_km,tiempo_minutos} = req.body

    try{
        RutaModel.updateRuta(rutaId,origen,destino,distancia_km,tiempo_minutos,(err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Ruta actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de modelo ${error}`})
    }
}

// Controlador para eliminar ruta
export const deleteRutaId = async (req,res) =>{
    const rutaId = req.params.rutaId

    try{
        RutaModel.deleteRuta(rutaId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Ruta eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}