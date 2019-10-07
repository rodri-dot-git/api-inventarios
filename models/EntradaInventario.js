const Mongoose = require("mongoose")
const ArticuloModel = require('./Articulo')
const InventarioModel = require('./Inventario')

const EntradaInventarioModel = Mongoose.model("EntradaInventario", {
    idArticulo: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        resolver: async (parent, args, {}) =>
            await ArticuloModel.findOne({
                _id: parent.idArticulo
            })
    },
    idInventario: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Inventario',
        resolver: async (parent, args, {}) =>
            await InventarioModel.findOne({
                _id: parent.idInventario
            })
            .populate('almacen')
            .exec(),
    },
    cantidad: Number
}, "entradainventarios");

module.exports.EntradaInventarioModel = EntradaInventarioModel