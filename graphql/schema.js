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
		organizacion: Organizacion
	}
	type Inventario {
		id: ID
		nombre: String
		almacen: Almacen
		organizacion: Organizacion
		date: Date
	}
	type Usuario {
		id: ID
		username: String
		tipo: String
		organizacion: Organizacion
		estatus: Boolean
	}
	type Query {
		articulo(codigoDeBarras: String): Articulo
		entradaInventario(inventario: String): [EntradaInventario]
		inventario(inventario: String): Inventario
		inventarios(organizacion: String): [Inventario]
		inventariosa: [Inventario]
		usuario(username: String, password: String): Usuario
		organizacion(id: String): Organizacion
		almacen(org: String): [Almacen]
	}
	type Mutation {
		addEntradaInventario(idArticulo: String, idInventario: String, cantidad: Float): EntradaInventario
		addAlmacen(nombre: String, organizacion: String): Almacen
		addInventario(almacen: String, nombre: String, usuario: String): Inventario
		addUsuario(username: String, password: String, tipo: String, organizacion: String): Usuario
	}
`;

module.exports.typeDefs = typeDefs 