const AlmacenModel = require('../../models').Almacen
const rollbar = require('../../utils').rollbar

module.exports = {
    Almacen: {
        Query: {
            almacen: async (_, args) => {
                try {
                    var res = await AlmacenModel.find({
                            'organizacion': args.org
                        }).exec();
                        rollbar.info('Almacen fetch correcto')
                        return res;
                } catch (error) {
                    rollbar.error(`Error en almacen fetch. error: ${error}`)
                }
            }
        }
    }
}