const AlmacenModel = require('../../models/Almacen').AlmacenModel

module.exports = {
    Mutation: {
        addAlmacen: async (_, args) => {
            var almacen = new AlmacenModel(args)
            return await almacen.save();
        },
    }
}