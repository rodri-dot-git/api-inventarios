const EntradaInventarioModel = require('../../models/EntradaInventario').EntradaInventarioModel
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Mutation: {
        addEntradaInventario: async (_, args) => {
            var entrada = new EntradaInventarioModel(args)
            return await entrada.save();
        },
    }
}