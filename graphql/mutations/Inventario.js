const InventarioModel = require('../../models').Inventario
const rollbar = require('../../utils').rollbar

module.exports = {
    Inventario: {
        Mutation: {
            addInventario: async (_, args) => {
                try {
                    var inventario = await new InventarioModel(args).save()
                    rollbar.info('Inventario insert correcto')
                    return inventario;
                } catch (error) {
                    rollbar.error(`Error en inventario insert. error: ${error}`)
                }
            },
        }
    }
}