const InventarioModel = require('../../models/Inventario').InventarioModel
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Mutation: {
        addInventario: async (_, args) => {
            var inventario = new InventarioModel(args)
            return await inventario.save();
        },
    }
}