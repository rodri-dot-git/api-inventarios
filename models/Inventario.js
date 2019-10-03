const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const InventarioModel = Mongoose.model("Inventario", {
    _id: Schema.Types.ObjectId,
    nombre: String,
    almacen: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Almacen',
        resolver: async (parent, args, {}) =>
            await AlmacenModel.findOne({
                _id: parent.almacen
            }),
    },
}, "inventarios");

module.exports.InventarioModel = InventarioModel