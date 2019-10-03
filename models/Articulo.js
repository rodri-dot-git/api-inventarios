const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const ArticuloModel = Mongoose.model("Articulo", {
    _id: Schema.Types.ObjectId,
    nombre: String,
    codigoDeBarras: String,
    codigo: String
}, "articulos");

module.exports.ArticuloModel = ArticuloModel