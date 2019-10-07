const InventarioModel = require('../../models').InventarioModel

module.exports = {
    Inventario: {
        Mutation: {
            addInventario: async (_, args) => {
                var inventario = new InventarioModel(args)
                return await inventario.save();
            },
        }
    }
}