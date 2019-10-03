const EntradaInventarioModel = require('../../models/EntradaInventario').EntradaInventarioModel

module.exports = {
    Mutation: {
        addEntradaInventario: async (_, args) => {
            var entrada = new EntradaInventarioModel(args)
            return await entrada.save();
        },
    }
}