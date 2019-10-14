const Mongoose = require("mongoose")

const UsuarioModel = Mongoose.model("Usuario", {
    username: {
        type: String,
        unique: true
    },
    password: String,
    tipo: String,
    organizacion: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion',
        resolver: async (parent, args, {}) =>
            await Organizacion.findOne({
                _id: parent.Organizacion
            }),
    },
    estatus: {
        type: Boolean,
        default: true
    }
}, "usuarios");

module.exports.UsuarioModel = UsuarioModel