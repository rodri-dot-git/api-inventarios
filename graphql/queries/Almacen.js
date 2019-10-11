const AlmacenModel = require('../../models').Almacen

module.exports = {
    Almacen: {
        Query: {
            almacen: async (_, args) => await AlmacenModel.find({
                'organizacion': args.org
            }).exec(),
        }
    }
}