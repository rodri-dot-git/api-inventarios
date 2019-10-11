const EntradaInventarioModel = require('../../models').EntradaInventario

function getUnique(arr, comp) {

    const unique = arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
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
                console.log(datos);
                datos.forEach(x => {
                    for (let i = 0; i < datos.length; i++) {
                        if(x.idArticulo == datos[i].idArticulo)
                            x.cantidad += datos[i].cantidad
                    }
                })
                return getUnique(datos, "idArticulo");
            }
        }
    }
}