import HistorialModel from '../models/historial_model.js'

// Controlador para registrar un nuevo modelo
export const createHistorial = async (req, res) => {
    const { usuario_id } = req.body;

    try {
        HistorialModel.createHistorial(usuario_id, (err, result) =>{
            if(err){
                res.status(500).json({error: 'No se pudo registrar historial'});
            }else{
                res.status(201).json({message:'Historial creado'});
            }
        });
    } catch (error) {
        res.status(500).json({error: 'No se registro al modelo'})
    }
};


// Controlador para conseguir un modelo
export const getHistorialById = async (req,res) => {
    const historialId = req.params.historialId

    try{
        HistorialModel.getHistorialById(historialId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener el hsitorial'})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    catch(error) {
        res.status(500).json({error:'Error obtener historial'})
    }
}

// Controlador para conseguir todos lo modelos
export const getHistorial = async (req,res) => {
    
    try{
        HistorialModel.getHistorial((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver los historiales'})
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

// Controlador para actualizar modelo
export const updateHistorial = async (req,res) => {
    const historialId = req.params.historialId
    const { usuario_id } = req.body

    try{
        HistorialModel.updateHistorial(historialId, usuario_id, (err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Historial actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de historial ${error}`})
    }
}

// Controlador para eliminar modelo
export const deleteHistorialId = async (req,res) =>{
    const historialId = req.params.historialId

    try{
        HistorialModel.deleteHistorialId(historialId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Historial eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}