import UsuarioModel from '../models/usuario_model.js'

// Controlador para registrar un nuevo modelo
export const createUsuario = async (req, res) => {
    const { nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id } = req.body;

    try {
        UsuarioModel.createUsuario(nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id, (err, result) =>{
            if(err){
                res.status(500).json({error: 'No se pudo registrar usuario'});
            }else{
                res.status(201).json({message:'Usuario creado'});
            }
        });
    } catch (error) {
        res.status(500).json({error: 'No se registro al modelo'})
    }
};


// Controlador para conseguir un modelo
export const getUsuarioById = async (req,res) => {
    const usuarioId = req.params.usuarioId

    try{
        UsuarioModel.getUsuarioById(usuarioId,(err,result)=>{
            if (err){
                res.status(500).json({error:'No se puede obtener el usuario'})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    catch(error) {
        res.status(500).json({error:'Error obtener usuario'})
    }
}

// Controlador para conseguir todos lo modelos
export const getUsuario = async (req,res) => {
    
    try{
        UsuarioModel.getUsuario((err,result)=>{
            if(err){
                res.status(500).json({error:'No se puede ver los usuarios'})
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
export const updateUsuario = async (req,res) => {
    const usuarioId = req.params.usuarioId
    const { nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id } = req.body

    try{
        UsuarioModel.updateUsuario(usuarioId, nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id, (err,result)=>{
            if(err){
                res.status(500).json({err:'Error actualizar'})
            }
            else{
                res.status(200).json({message:'Usuario actualizado'})
            }
        })
    }
    catch(error){
        res.status(500).json({error:`Error de usuario ${error}`})
    }
}

// Controlador para eliminar modelo
export const deleteUsuarioId = async (req,res) =>{
    const usuarioId = req.params.usuarioId

    try{
        UsuarioModel.deleteUsuario(usuarioId,(err,result)=>{
            if(err){
                res.status(500).json({err:'No se puede borrar'})
            }
            else{
                res.status(200).json({message:'Usuario eliminado!'})
            }
        })
    }
    catch(error){
        res.status(500).json({message:'Error eliminación'})
    }
}