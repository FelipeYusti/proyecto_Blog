const { Schema, model, Collection } = require("mongoose");

const publicacionesSchema = Schema(
  {
    autor_id: {
      type: int,
      required: true
    },
    titulo: {
      type: int,
      required: true
    },
    contenido_publicacion: {
      type: int,
      required: true
    },
    rutImagen: {
      type: String,
      default: ""
    },
    fecha_publicacion: {
      type: Date,
      required: true
    }
  },

  { collection: "publicacione" }
);

module.exports = model("Publicaciones", cometariosSchema);
