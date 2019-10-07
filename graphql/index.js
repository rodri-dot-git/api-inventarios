const {
    merge
} = require("lodash")
const Almacen = require('./mutations/Almacen').Almacen
const EntradaInventario = require('./mutations/EntradaInventario').EntradaInventario
const Inventario = require('./mutations/Inventario').Inventario
const Articulo = require('./queries/Articulo').Articulo
const EntradaInventarioQ = require('./queries/Entradainventario').EntradaInventario
const InventarioQ = require('./queries/Inventario').Inventario

module.exports.resolvers = merge(
    Almacen,
    EntradaInventario,
    EntradaInventarioQ,
    Inventario,
    Articulo,
    InventarioQ
)