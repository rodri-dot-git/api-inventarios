const Mongoose = require("mongoose")

const ArticuloModel = Mongoose.model("Articulo", {
    nombre: String,
    precio: Number,
    marca: String
}, "articulos");

module.exports.ArticuloModel = ArticuloModel