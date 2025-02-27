const publicaciones = require('../models/publicaciones');
let Publicaciones = require('../models/publicaciones');
//let jwt = require('jsonwebtoken');

//let bcrytp = require('bcryptjs');
const comentarios = require('../models/comentarios');


// Funcion para que el comentario salga segun la publicacion 

const listarPorIdPost = async (req, res) => {

    let id = req.params.id;

    try {
        //Consultar todos sin filtro

        let listarComentarios = await comentarios.find(id).exec();
        res.status(200).send({
            exito: true,
            listarComentarios,
        })

    } catch (error) {
        res.status(500).send({
            exito: false,
            mensaje: "Error en la consulta",
        });
    }

};

const nuevoComentario = async (req, res) => {


    let datos = {
        post_id: req.body.post_id,
        usuario_id: req.body.usuario_id,
        contenido_comentario: req.body.contenido_comentario,
        fecha_comentario: req.body.fecha_comentario,
    };

    try {
        // Instanciamos del modelo producto (Collection)
        const comentarioNuevo = new comentarios(datos);

        // Salvamos mongoose

        comentarioNuevo.save(); //Escribe el mongo

        return res.send({
            estado: true,
            mensaje: `Insercion exitosa`,
        });

    } catch (error) {
        return res.send({
            estado: false,
            mensaje: `A ocurrido un error en la consulta ${error}`,
        });
    }
};

const actualizarPorId = async (req, res) => {
    //Recibe el parametro de la consulta

    let id = req.params.id;



    //Payload que viene en el body :: los datos que manda el formulario
    let datos = {
        post_id: req.body.post_id,
        usuario_id: req.body.usuario_id,
        contenido_comentario: req.body.contenido_comentario,
        fecha_comentario: req.body.fecha_comentario,
    };

    try {
        let consulta = await comentarios.findByIdAndUpdate(id, datos).exec();
        return res.send({
            estado: true,
            mensaje: `Actualizacion exitosa`,
            consulta: consulta,
        });
    } catch (error) {
        return res.send({
            estado: true,
            mensaje: `Error al actualizar`,
            consulta: consulta,
        });
    }
}
const borrarPorId = async (req, res) => {

    let id = req.params.id;

    try {

        // let consulta = await producto.findByIdAndDelete(id).exec();
        let consulta = await comentarios.findOneAndDelete({ _id: id }).exec();

        return res.send({
            estado: true,
            mensaje: `Se eliminó correctamente`,
            consulta: consulta,
        });

    } catch (error) {
        return res.send({
            estado: false,
            mensaje: `Error, no se elimino`,
        });
    }
};



module.exports = { listarPorIdPost, nuevoComentario, actualizarPorId, borrarPorId };