const gql = require('apollo-server').gql

const typeDefs = gql `
	scalar Date
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
	type Organizacion {
		id: ID
		nombre: String
	}
	type Almacen {
		id: ID
		nombre: String
	}
	type Inventario {
		id: ID
		nombre: String
		almacen: Almacen
		organizacion: Organizacion
		fecha: Date
	}
	type Usuario {
		id: ID
		username: String
		tipo: String
		organizacion: Organizacion
	}
	type Query {
		articulo(codigoDeBarras: String): Articulo
		entradaInventario(inventario: String): [EntradaInventario]
		inventario(inventario: String): Inventario
		inventarios(organizacion: String): [Inventario]
		inventariosa: [Inventario]
		usuario(username: String, password: String): Usuario
		organizacion(id: String): Organizacion
	}
	type Mutation {
		addEntradaInventario(idArticulo: String, idInventario: String, cantidad: Float): EntradaInventario
		addAlmacen(nombre: String): Almacen
		addInventario(idAlmacen: String, nombre: String, username: String): Inventario
		addUsuario(username: String, password: String, tipo: String, organizacion: String): Usuario
	}
`;

module.exports.typeDefs = typeDefs 