const AlmacenModel = require('../../models').Almacen

module.exports = {
    Almacen: {
        Query: {
            articulo: async (_, args) => await AlmacenModel.findOne({
                'organizacion': args.org
            }).exec(),
        }
    }
}