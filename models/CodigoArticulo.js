const Mongoose = require("mongoose")
const ArticuloModel = require('./Articulo')

const CodigoArticuloModel = Mongoose.model("CodigoArticulo", {
    idArticulo: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        resolver: async (parent, args, {}) =>
            await ArticuloModel.findOne({
                _id: parent.idArticulo
            })
    },
    codigo: String,
    unidad: Number
});

module.exports.CodigoArticuloModel = CodigoArticuloModel