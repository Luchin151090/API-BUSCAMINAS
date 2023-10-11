import ParaderoModel from '../models/paradero_model.js'

// Controlador para registrar un nuevo modelo
export const createParadero = async (req, res) => {
    const { nombre, latitud, longitud } = req.body;

    try {
        ParaderoModel.createParadero(nombre, latitud, longitud, (err, result) =>{
            if(err){
                res.status(500).json({error: 'No se pudo registrar paradero'});
            }else{
                res.status(201).json({message:'Paradero creado'});
            }
        });
    } catch (error) {
        res.status(500).json({error: 'No se registro al modelo'})
    }
};


// Controlador para conseguir un modelo
export const getParaderoById = async (req,res) => {
    const paraderoId = req.params.paraderoId

    try{
        ParaderoModel.getParaderoById(paraderoId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener el paradero'})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    catch(error) {
        res.status(500).json({error:'Error obtener paradero'})
    }
}

// Controlador para conseguir todos lo modelos
export const getParadero = async (req,res) => {
    
    try{
        ParaderoModel.getParadero((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver los paraderos'})
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
export const updateParadero = async (req,res) => {
    const paraderoId = req.params.paraderoId
    const { nombre, latitud, longitud } = req.body

    try{
        ParaderoModel.updateParadero(paraderoId, nombre, latitud, longitud, (err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Paradero actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de paradero ${error}`})
    }
}

// Controlador para eliminar modelo
export const deleteParaderoId = async (req,res) =>{
    const paraderoId = req.params.paraderoId

    try{
        ParaderoModel.deleteParadero(paraderoId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Paradero eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}