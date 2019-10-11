const InventarioModel = require('../../models').Inventario

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