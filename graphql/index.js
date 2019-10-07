const {
    merge
} = require("lodash")
const Almacen = require('./mutations/Almacen').Almacen
const EntradaInventario = require('./mutations/EntradaInventario').EntradaInventario
const Inventario = require('./mutations/Inventario').Inventario
const Articulo = require('./queries/Articulo').Articulo
const EntradaInventarioQ = require('./queries/Entradainventario').EntradaInventario
module.exports.resolvers = merge(
    Almacen,
    EntradaInventario,
    EntradaInventarioQ,
    Inventario,
    Articulo
)