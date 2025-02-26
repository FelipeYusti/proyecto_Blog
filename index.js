const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// conexion base de datos.
const cnn = require("./models/bd_conexion.js");
cnn();

// rutas globales de la app
const rutaUser = require("./routes/usuarios.js");

app.use("/API", rutaUser);
app.listen(4000, () => {
  console.log(`escuchando en el puerto: ${4000}`);
});
