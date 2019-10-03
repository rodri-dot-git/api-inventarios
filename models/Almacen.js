const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const AlmacenModel = Mongoose.model("Almacen", {
    _id: Schema.Types.ObjectId,
    nombre: String
}, "almacens");

module.exports.AlmacenModel = AlmacenModel