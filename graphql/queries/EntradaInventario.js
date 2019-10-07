const EntradaInventarioModel = require('../../models/EntradaInventario').EntradaInventarioModel

module.exports = {
    EntradaInventario: {
        Query: {
            entradaInventario: async (_, args) =>
                await EntradaInventarioModel.find({
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
                .exec(),
        }
    }
}