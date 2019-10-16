const InventarioModel = require('../../models').Inventario
const rollbar = require('../../utils').rollbar

module.exports = {
    Inventario: {
        Query: {
            inventario: async (_, args) => {
                try {
                    var res = await InventarioModel.findOne({
                            _id: args.inventario
                        })
                        .populate('almacen')
                        .exec();
                    rollbar.log('Inventario fetch correcto')
                    return res;
                } catch (error) {
                    rollbar.log(`Error en inventario fetch. error: ${error}`)
                }
            },
            inventarios: async (_, args) => {
                try {
                    var res = await InventarioModel.find({
                        usuario: args.organizacion
                    }).exec();
                    rollbar.log('Inventarios fetch correcto')
                    return res;
                } catch (error) {
                    rollbar.log(`Error en inventario fetch. error: ${error}`)
                }
            },
            inventariosa: async (_, args) => {
                try {
                    var res = await InventarioModel.find().exec();
                    rollbar.log('Inventarisa fetch correcto')
                    return res
                } catch (error) {
                    rollbar.log(`Error en inventario fetch. error: ${error}`)
                }
            }
        }
    }
}