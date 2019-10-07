const { gql } = require('apollo-server');

const typeDefs = gql `
	type Articulo {
		id: ID
		nombre: String
		codigoDeBarras: String
		codigo: String
	}
	type EntradaInventario {
		id: ID
		idArticulo: Articulo
		idInventario: Inventario
		cantidad: Float
	}
	type Almacen {
		id: ID
		nombre: String
	}
	type Inventario {
		id: ID
		nombre: String
		almacen: Almacen
	}
	type Query {
		articulo(codigoDeBarras: String): Articulo
		entradaInventario(inventario: String): [EntradaInventario]
	}
	type Mutation {
		addEntradaInventario(idArticulo: String, idInventario: String, cantidad: Float): EntradaInventario
		addAlmacen(nombre: String): Almacen
		addInventario(idAlmacen: String, nombre: String): Inventario
	}
`;
module.exports.typeDefs = typeDefs 