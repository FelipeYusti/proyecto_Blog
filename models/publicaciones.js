const { Schema, model, Collection } = require("mongoose");

const publicacionesSchema = Schema(
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
      type: String,
      required: true,
    },
    rutaImagen: {
      type: String,
    },
    fecha_publicacion: {
      type: Date,
      required: true,
    },
  },

  { collection: "post" }
);

module.exports = model("post", publicacionesSchema);
