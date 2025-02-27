
const { Schema, model, Collection } = require("mongoose");


const publicacionesSchema = Schema(

    {
        autor_id: {
            type: int,
            required: true,
        },
        titulo: {
            type: int,
            required: true,
        },
        contenido_publicacion: {
            type: int,
            required: true,
        },
        fecha_publicacion: {
            type: Date,
            required: true,
        },
    },

    { collection: "comentarios" }

);

module.exports = model('comentarios', cometariosSchema);


