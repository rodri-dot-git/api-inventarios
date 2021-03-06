const merge = require("lodash").merge
const Almacen = require('./mutations/Almacen.js').Almacen
const EntradaInventario = require('./mutations/EntradaInventario.js').EntradaInventario
const Inventario = require('./mutations/Inventario.js').Inventario
const Articulo = require('./queries/Articulo.js').Articulo
const EntradaInventarioQ = require('./queries/EntradaInventario.js').EntradaInventario
const InventarioQ = require('./queries/Inventario.js').Inventario
const Usuario = require('./queries/Usuario').Usuario
const UsuarioM = require('./mutations/Usuario').Usuario
const DateType = require('./DateResolver').resolverMap
const Organizacion = require('./queries/Organizacion').Organizacion
const AlmacenQ = require('./queries/Almacen').Almacen

module.exports.resolvers = merge(
    Almacen,
    EntradaInventario,
    EntradaInventarioQ,
    Inventario,
    Articulo,
    InventarioQ,
    Usuario,
    UsuarioM,
    DateType,
    Organizacion,
    AlmacenQ
)
module.exports.typeDefs = require('./schema').typeDefs