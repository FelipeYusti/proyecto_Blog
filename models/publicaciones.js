const { Schema, model } = require("mongoose");
const publicacionesSchema = new Schema(
  {
    autor_id: {
      type: Number,
      required: true,
    },
    titulo: {
      type: Number,
      required: true,
    },
    contenido_publicacion: {
      type: Number,
      required: true,
    },
    rutImagen: {
      type: String,
      default: "",
    },
    fecha_publicacion: {
      type: Date,
      required: true,
    },
  },
  { collection: "post" }
);
module.exports = model("post", publicacionesSchema);
