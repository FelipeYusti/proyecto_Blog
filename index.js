const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// conexion base de datos.
const cnn = require("./models/bd_conexion.js");
cnn();

// rutas globales de la app
const rutUser = require("./controllers/usuarios.js");
const rutcomments = require("./controllers/cometarios.js");
const rutPost = require("./controllers/publicaciones.js");

app.use("api/", rutUser);
app.use("api/", rutPost);
app.use("api/", rutcomments);

app.listen(4000, () => {
  console.log(`escuchando en el puerto: ${4000}`);
});
