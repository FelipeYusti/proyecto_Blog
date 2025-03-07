const { Schema, model, Collection } = require("mongoose");

const comentariosSchema = new Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    usuario_id: {
      type: Schema.Types.ObjectId, // Cambiado para referenciar la colección 'user'
      ref: "User",
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
