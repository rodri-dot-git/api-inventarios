const Mongoose = require("mongoose")

const ArticuloModel = Mongoose.model("Articulo", {
    nombre: String,
    codigoDeBarras: String,
    codigo: String
}, "articulos");

module.exports.ArticuloModel = ArticuloModel