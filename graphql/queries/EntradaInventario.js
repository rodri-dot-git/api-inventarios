const EntradaInventarioModel = require('../../models').EntradaInventario

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
            entradaInventario: async (_, args) =>{
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
                    for (let i = 0; i < datos.length; i++) {
                        if(x.idArticulo == datos[i].idArticulo && x._id != datos[i]._id)
                            x.cantidad += datos[i].cantidad
                    }
                })
                return getUnique(datos, "idArticulo");
            }
        }
    }
}