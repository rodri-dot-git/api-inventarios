const EntradaInventarioModel = require('../../models').EntradaInventario
const rollbar = require('../../utils').rollbar

function getUnique(arr, comp) {
    const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
    return unique;
}

module.exports = {
    EntradaInventario: {
        Query: {
            entradaInventario: async (_, args) => {
                try {
                    var datos = await EntradaInventarioModel.find({
                            idInventario: args.inventario
                        })
                        .populate([{
                                model: 'Inventario',
                                path: 'idInventario',
                                populate: {
                                    model: 'Almacen',
                                    path: 'almacen'
                                }
                            },
                            {
                                model: 'Articulo',
                                path: 'idArticulo'
                            }
                        ])
                        .exec()
                    datos.forEach(x => {
                        x.cantidad = x.cantidad * x.idArticulo.unidad
                    })
                    rollbar.info('Entrada inventario fetch correcto')
                    return datos
                } catch (error) {
                    rollbar.error(`Error en entrada inventario fetch. error: ${error}`)
                }
            }
        }
    }
}