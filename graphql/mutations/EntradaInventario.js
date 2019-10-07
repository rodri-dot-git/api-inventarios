const EntradaInventarioModel = require('../../models/EntradaInventario.js').EntradaInventarioModel

module.exports = {
    EntradaInventario: {
        Mutation: {
            addEntradaInventario: async (_, args) => {
                var entrada = new EntradaInventarioModel(args)
                return await entrada.save();
            },
        }
    }
}