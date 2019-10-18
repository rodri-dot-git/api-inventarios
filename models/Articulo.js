const Mongoose = require("mongoose")

const ArticuloModel = Mongoose.model("Articulo", {
    nombre: String,
    codigoDeBarras: String,
    codigo: String,
    unidad: Number
}, "articulos");

module.exports.ArticuloModel = ArticuloModel