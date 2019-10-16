const EntradaInventarioModel = require('../../models').EntradaInventario
const rollbar = require('../../utils').rollbar

module.exports = {
    EntradaInventario: {
        Mutation: {
            addEntradaInventario: async (_, args) => {
                try {
                    var entrada = await new EntradaInventarioModel(args).save();
                    rollbar.log('Entrada insert correcto');
                    return entrada;
                } catch (error) {
                    rollbar.log(`Error en entrada insert. error: ${error}`)
                }
            }
        }
    }
}