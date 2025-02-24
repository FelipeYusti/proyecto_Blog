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

app.use("api/", rutUser);
app.listen(4000, () => {
  console.log(`escuchando en el puerto: ${4000}`);
});
