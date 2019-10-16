const ArticuloModel = require('../../models').Articulo
const rollbar = require('../../utils').rollbar

module.exports = {
    Articulo: {
        Query: {
            articulo: async (_, args) => {
                try {
                    var res = await ArticuloModel.findOne({
                        'codigoDeBarras': args.codigoDeBarras
                    }).exec();
                    rollbar.log('Articulo fetch correcto con cdb')
                    return res;
                } catch (error) {
                    rollbar.log(`Error en articulo fetch. error: ${error}`)
                }
            }
        }
    }
}