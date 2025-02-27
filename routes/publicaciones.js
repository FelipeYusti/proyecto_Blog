// Rutas para consumir el modulo productos del servicio Ecommerce

const express = require("express");
const router = express.Router();


//Instanciamos el controlador correspondiente 
const publicacionesController = require("../controllers/publicaciones");

//rutas que entrega la API 

router.get("/publicaciones/listarTodo", publicacionesController.listarTodo);
router.get("/publicaciones/listarPorIdComentario", publicacionesController.listarPorIdComentario);
router.post("/publicaciones/nuevaPublicacion", publicacionesController.nuevaPublicacion);
router.put("/publicaciones/actualizarPorId", publicacionesController.listarTodo);
router.delete("/publicaciones/borrarPorId", publicacionesController.borrarPorId);

//....

module.exports = router; 