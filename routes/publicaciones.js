// Rutas para consumir el modulo productos del servicio Ecommerce

const express = require("express");
const router = express.Router();

//Instanciamos el controlador correspondiente
const publicacionesController = require("../controllers/publicaciones.js");

//rutas que entrega la API

router.get("/publicaciones/listarTodo", publicacionesController.listarTodo);
router.get(
  "/publicaciones/listarPorIdPublicacion/:id",
  publicacionesController.listarPorIdUserPublicacion
);
router.get(
  "/publicaciones/listarPublicId/:id",
  publicacionesController.traerPublicId
);
router.post(
  "/publicaciones/nuevaPublicacion",
  publicacionesController.nuevaPublicacion
);
router.put(
  "/publicaciones/actualizarPorId/:id",
  publicacionesController.actualizarPorId
);
router.delete(
  "/publicaciones/borrarPorId/:id",
  publicacionesController.borrarPorId
);

//....

module.exports = router;
