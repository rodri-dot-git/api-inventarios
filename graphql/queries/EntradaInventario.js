const EntradaInventarioModel = require('../../models/EntradaInventario').EntradaInventarioModel

module.exports = {
    Query: {
        entradaInventario: async (_, args, {}) =>
            await EntradaInventarioModel.find({
                idInventario: args.inventario
            })
            .populate('idArticulo')
            .populate('idInventario')
            .exec(),
    }
}