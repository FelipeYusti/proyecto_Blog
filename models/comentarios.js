

const { Schema, model, Collection } = require("mongoose");


const cometariosSchema = Schema(

    {
        post_id: {
            type: int,
            required: true,
        },
        usuario_id: {
            type: int,
            required: true,
        },
        contenido_comentario: {
            type: String,
            required: true,
        },
        fecha_comentario: {
            type: Date,
            required: true,
        },
    },

    { collection: "comentarios" }

);

module.exports = model('comentarios', cometariosSchema);


