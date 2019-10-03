const EntradaInventarioModel = require('../../models/EntradaInventario').EntradaInventarioModel
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Query: {
        entradaInventario: async (_, args, {}) =>
            await EntradaInventarioModel.find({
                idInventario: args.inventario
            })
            .populate('idArticulo')
            .populate('idInventario')
            .exec(),
    }
}