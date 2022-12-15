//Models: como instancias/interfaces de información para DB
//En singular como buena práctica

const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

//Menciona el modelo que se guardará en DB y partir de qué está moldeado
module.exports = model("Usuario", UsuarioSchema);