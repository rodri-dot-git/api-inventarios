const ArticuloModel = require('../../models/Articulo').ArticuloModel
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Query: {
        articulo: async (_, args) => await ArticuloModel.findOne({
            'codigoDeBarras': args.codigoDeBarras
        }).exec(),
    }
}