import BusModel from '../models/bus_model.js';

// Controlador para registrar un nuevo bus
export const createBus = async (req, res) => {
  const { nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id } = req.body;
 
  try {
    BusModel.createBus(nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'No se pudo registrar el bus' });
      } else {
        res.status(201).json({ message: 'Bus registrado con éxito' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar el modelo' });
  }
};

// Controlador para conseguir un bus
export const getBus = async (req,res) => {
    const busId = req.params.busId

    try{
        BusModel.getBusById(busId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener el bus'})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    catch(error) {
        res.status(500).json({error:'Error obtener bus'})
    }
}

// Controlador para conseguir todos los buses
export const getBuses = async (req,res) => {
    
    try{
        BusModel.getBuses((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver los buses'})
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

// Controlador para actualizar bus
export const updateBus = async (req,res) => {
    const busId = req.params.modeloId
    const {nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id} = req.body

    try{
        BusModel.updateBus(busId,nombre_empresa, capacidad, anio_fabricacion,placa, ruta_id,modelo_id,(err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Bus actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de modelo ${error}`})
    }
}

// Controlador para eliminar modelo
export const deleteBusId = async (req,res) =>{
    const busId = req.params.busId

    try{
        BusModel.deleteBus(busId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Bus eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}