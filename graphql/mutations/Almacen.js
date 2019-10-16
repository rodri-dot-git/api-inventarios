const AlmacenModel = require('../../models').Almacen
const rollbar = require('../../utils').rollbar

module.exports = {
    Almacen: {
        Mutation: {
            addAlmacen: async (_, args) => {
                try {
                    var almacen = await new AlmacenModel(args).save();
                    rollbar.info('Almacen insert correcto')
                    return almacen;
                } catch (error) {
                    rollbar.error(`Error en almacen insert. error: ${error}`)
                }
            }
        }
    }
}