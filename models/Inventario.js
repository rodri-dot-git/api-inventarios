const Mongoose = require("mongoose")
const { Almacen, Usuario } = require('../models')

const InventarioModel = Mongoose.model("Inventario", {
    nombre: String,
    almacen: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Almacen',
        resolver: async (parent, args, {}) =>
            await Almacen.findOne({
                _id: parent.almacen
            }),
    },
    usuario: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion',
        resolver: async (parent, args, {}) =>
            await Organizacion.findOne({
                _id: parent.usuario
            }),
    },
    date: {
        type: Date,
        default: Date.now
    },
}, "inventarios");

module.exports.InventarioModel = InventarioModel