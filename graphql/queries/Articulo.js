const ArticuloModel = require('../../models/Articulo').ArticuloModel

module.exports = {
    Query: {
        articulo: async (_, args) => await ArticuloModel.findOne({
            'codigoDeBarras': args.codigoDeBarras
        }).exec(),
    }
}