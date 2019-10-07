const ArticuloModel = require('../../models/Articulo.js').ArticuloModel

module.exports = {
    Articulo: {
        Query: {
            articulo: async (_, args) => await ArticuloModel.findOne({
                'codigoDeBarras': args.codigoDeBarras
            }).exec(),
        }
    }
}