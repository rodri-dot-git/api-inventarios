const Mongoose = require("mongoose")

const AlmacenModel = Mongoose.model("Almacen", {
    nombre: String,
    organizacion: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion',
        resolver: async (parent, args, {}) =>
            await Organizacion.findOne({
                _id: parent.Organizacion
            }),
    },
}, "almacens");

module.exports.AlmacenModel = AlmacenModel