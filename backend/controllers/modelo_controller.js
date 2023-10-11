import ModeloModel from '../models/modelo_model.js';

// Controlador para registrar un nuevo modelo
export const createModelo = async (req, res) => {
  const { nombre } = req.body;
 
  try {
    ModeloModel.createModelo(nombre, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'No se pudo registrar el modelo' });
      } else {
        res.status(201).json({ message: 'Modelo registrado con éxito' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar el modelo' });
  }
};

// Controlador para conseguir un modelo
export const getModelo = async (req,res) => {
    const modeloId = req.params.modeloId

    try{
        ModeloModel.getModeloId(modeloId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener el modelo'})
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

// Controlador para conseguir todos lo modelos
export const getModelos = async (req,res) => {
    
    try{
        ModeloModel.getModelos((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver los modelos'})
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
export const updateModelo = async (req,res) => {
    const modeloId = req.params.modeloId
    const {nombre} = req.body

    try{
        ModeloModel.updateModelo(modeloId,nombre,(err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Modelo actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de modelo ${error}`})
    }
}

// Controlador para eliminar modelo
export const deleteModeloId = async (req,res) =>{
    const modeloId = req.params.modeloId

    try{
        ModeloModel.deleteModelo(modeloId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Modelo eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}