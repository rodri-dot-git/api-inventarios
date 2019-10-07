const InventarioModel = require('../../models/Inventario').InventarioModel

module.exports = {
    Inventario: {
        Query: {
            inventario: async (_, args) =>
                await InventarioModel.findOne({
                    _id: args.inventario
                })
                .populate('almacen')
                .exec(),
        }
    }
}