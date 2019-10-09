const merge = require("lodash").merge
const Almacen = require('./mutations/Almacen.js').Almacen
const EntradaInventario = require('./mutations/EntradaInventario.js').EntradaInventario
const Inventario = require('./mutations/Inventario.js').Inventario
const Articulo = require('./queries/Articulo.js').Articulo
const EntradaInventarioQ = require('./queries/EntradaInventario.js').EntradaInventario
const InventarioQ = require('./queries/Inventario.js').Inventario
const Usuario = require('./queries/Usuario').Usuario
const UsuarioM = require('./mutations/Usuario').Usuario
const Date = require('./DateResolver').resolverMap

module.exports.resolvers = merge(
    Almacen,
    EntradaInventario,
    EntradaInventarioQ,
    Inventario,
    Articulo,
    InventarioQ,
    Usuario,
    UsuarioM
)
module.exports.typeDefs = require('./schema').typeDefs