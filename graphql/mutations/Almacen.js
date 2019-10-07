const AlmacenModel = require('../../models/Almacen.js').AlmacenModel

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