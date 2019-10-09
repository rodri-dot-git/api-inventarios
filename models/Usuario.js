const Mongoose = require("mongoose")

const UsuarioModel = Mongoose.model("Usuario", {
    Username: String,
    Password: String
}, "Usuarios");

module.exports.UsuarioModel = UsuarioModel