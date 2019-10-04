const {
	ApolloServer,
	gql
} = require('apollo-server');
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const dotenv = require('dotenv');

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
		inventario(inventario: String) : Inventario
	}
	type Mutation {
		addEntradaInventario(idArticulo: String, idInventario: String, cantidad: Float): EntradaInventario
		addAlmacen(nombre: String): Almacen
		addInventario(idAlmacen: String, nombre: String): Inventario
	}
`;

dotenv.config();

Mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const ArticuloModel = Mongoose.model("Articulo", {
	nombre: String,
	codigoDeBarras: String,
	codigo: String
}, "articulos");

const InventarioModel = Mongoose.model("Inventario", {
	nombre: String,
	almacen: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'Almacen',
		resolver: async (parent, args, {}) =>
			await AlmacenModel.findOne({
				_id: parent.almacen
			}),
	},
}, "inventarios");

const AlmacenModel = Mongoose.model("Almacen", {
	nombre: String
}, "almacens");

const EntradaInventarioModel = Mongoose.model("EntradaInventario", {
	idArticulo: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'Articulo',
		resolver: async (parent, args, {}) =>
			await ArticuloModel.findOne({
				_id: parent.idArticulo
			})
	},
	idInventario: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'Inventario',
		resolver: async (parent, args, {}) =>
			await InventarioModel.findOne({
				_id: parent.idInventario
			})
			.populate('almacen')
			.exec(),
	},
	cantidad: Number
}, "entradainventarios");

const resolvers = {
	Query: {
		articulo: async (_, args) => await ArticuloModel.findOne({
			'codigoDeBarras': args.codigoDeBarras
		}).exec(),
		entradaInventario: async (_, args) =>
			await EntradaInventarioModel.find({
				idInventario: args.inventario
			})
			.populate('idArticulo')
			.populate('idInventario')
			.exec(),
		inventario: async (_, args) =>
			await InventarioModel.findOne({_id: args.inventario})
			.populate('almacen')
			.exec(),
	},
	Mutation: {
		addEntradaInventario: async (_, args) => {
			var entrada = new EntradaInventarioModel({
				idArticulo: Mongoose.Types.ObjectId(args.idArticulo),
				idInventario: Mongoose.Types.ObjectId(args.idInventario),
				cantidad: args.cantidad
				
			})
			return await entrada.save();
		},
		addAlmacen: async (_, args) => {
			var almacen = new AlmacenModel(args)
			return await almacen.save();
		},
		addInventario: async (_, args) => {
			var inventario = new InventarioModel(args)
			return await inventario.save();
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true
});

server.listen(process.env.PORT || 5000).then(({url}) => {
	console.log(`🚀  Server ready at ${url}`);
});