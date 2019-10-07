const AlmacenModel = require('../../models').Almacen

module.exports = {
    Almacen: {
        Mutation: {
            addAlmacen: async (_, args) => {
                var almacen = new AlmacenModel(args)
                return await almacen.save();
            },
        }
    }
}