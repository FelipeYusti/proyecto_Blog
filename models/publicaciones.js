const { Schema, model } = require("mongoose");
const publicacionesSchema = new Schema(
  {
    autor_id: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    sub_titulo: {
      type: String,
      required: true,
    },
    contenido_publicacion: {
      type: String,
      required: true,
    },
    rutImagen: {
      type: String,
      default: "",
    },
    fecha_publicacion: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
  },
  { collection: "post" }
);
module.exports = model("post", publicacionesSchema);
