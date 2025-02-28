// Rutas para consumir el modulo productos del servicio Ecommerce

const express = require("express");
const router = express.Router();

//Instanciamos el controlador correspondiente
const cometariosController = require("../controllers/comentarios.js");

//rutas que entrega la API

router.get("/comentarios/listarPorId", cometariosController.listarPorIdPost);
router.post("/comentarios/nuevoComentario", cometariosController.nuevoComentario);
router.put("/comentarios/actualizarPorId", cometariosController.actualizarPorId);
router.delete("/comentarios/borrarPorId", cometariosController.borrarPorId);

//....

module.exports = router;
