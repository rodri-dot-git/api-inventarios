const InventarioModel = require('../../models/Inventario.js').InventarioModel

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