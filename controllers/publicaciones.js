const publicaciones = require("../models/publicaciones");
let Publicaciones = require("../models/publicaciones");
const Comentarios = require("../models/comentarios");
let jwt = require("jsonwebtoken");

//let bcrytp = require('bcryptjs');
const comentarios = require("../models/comentarios");

// Funcion para que el comentario salga segun la publicacion

const listarTodo = async (req, res) => {
  try {
    //Consultar todos sin filtro

    let listarPublicaciones = await publicaciones.find().exec();
    res.status(200).send({
      exito: true,
      listarPublicaciones,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

const listarPorIdComentario = async (req, res) => {
  let id = req.params.id;

  try {
    //Consultar todos sin filtro

    let listarPublicaciones = await publicaciones.find(id).exec();
    res.status(200).send({
      exito: true,
      listarComentarios,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

const listarPorCategoria = async (req, res) => {
  let categoria = req.params.categoria;

  try {
    let listarPublicaciones = await publicaciones
      .find({ categoria: categoria })
      .exec();

    res.status(200).send({
      exito: true,
      listarPublicaciones,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

const nuevaPublicacion = async (req, res) => {
  let datos = {
    autor_id: req.body.autor_id,
    titulo: req.body.titulo,
    sub_titulo: req.body.sub_titulo,
    rutImagen: req.body.imagen,
    contenido_publicacion: req.body.contenido_publicacion,
    fecha_publicacion: req.body.fecha_publicacion,
    categoria: req.body.categoria,
  };

  try {
    // Instanciamos del modelo producto (Collection)
    const publicacionNueva = new publicaciones(datos);

    // Salvamos mongoose

    publicacionNueva.save(); //Escribe el mongo

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
    autor_id: req.body.autor_id,
    titulo: req.body.titulo,
    rutImagen: req.body.imagen,
    categoria: req.body.categoria,
    contenido_publicacion: req.body.contenido_publicacion,
    fecha_publicacion: req.body.fecha_publicacion,
  };

  try {
    let consulta = await publicaciones.findByIdAndUpdate(id, datos).exec();
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
};

const borrarPorId = async (req, res) => {
  let id = req.params.id;

  try {
    let consulta = await publicaciones.findOneAndDelete({ _id: id }).exec();

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

const obtenerComentariosPorPublicacion = async (req, res) => {
  let id = req.params.id;

  try {
    const comentarios = await Comentarios.find({ post_id: id });

    if (comentarios.length === 0) {
      return res.status(404).send({
        estado: false,
        mensaje: "No se encontraron comentarios para esta publicación.",
      });
    }

    return res.status(200).send({
      estado: true,
      mensaje: "Comentarios encontrados",
      datos: comentarios,
    });
  } catch (error) {
    return res.status(500).send({
      estado: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error.message}`,
    });
  }
};

module.exports = {
  listarPorIdComentario,
  nuevaPublicacion,
  listarTodo,
  actualizarPorId,
  borrarPorId,
  listarPorCategoria,
  obtenerComentariosPorPublicacion,
};
