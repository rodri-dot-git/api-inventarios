const Mongoose = require("mongoose")

const AlmacenModel = Mongoose.model("Almacen", {
    nombre: String
}, "almacens");

module.exports.AlmacenModel = AlmacenModel