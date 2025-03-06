const { Schema, model, Collection } = require("mongoose");

const comentariosSchema = Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    usuario_id: {
      type: String,
      required: true,
    },
    contenido_comentario: {
      type: String,
      required: true,
    },
    fecha_comentario: {
      type: String,
      required: true,
    },
  },

  { collection: "comentarios" }
);

module.exports = model("comentarios", comentariosSchema);
