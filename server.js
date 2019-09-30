const {
    ApolloServer,
    gql
} = require('apollo-server');
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

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
        almacen: Almacen
        nombre: String
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

const Schema = Mongoose.Schema;

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ArticuloModel = Mongoose.model("Articulo", {
    _id: Schema.Types.ObjectId,
    nombre: String,
    codigoDeBarras: String,
    codigo: String
}, "articulos");
const InventarioModel = Mongoose.model("Inventario", {
    _id: Schema.Types.ObjectId,
    almacen: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Almacen',
        resolver: async (parent, args, {}) => {
            return await AlmacenModel.findOne({
                _id: parent.almacen
            });
        }
    },
    nombre: String
}, "inventarios");
const AlmacenModel = Mongoose.model("Almacen", {
    _id: Schema.Types.ObjectId,
    nombre: String
}, "almacens");
const EntradaInventarioModel = Mongoose.model("EntradaInventario", {
    _id: Schema.Types.ObjectId,
    idArticulo: {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'Articulo',
        resolver: async (parent, args, {}) => {
            return await ArticuloModel.findOne({
                _id: parent.idArticulo
            });
        }
    },
    idInventario: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Inventario',
        resolver: async (parent, args, {}) => {
            return await InventarioModel.findOne({
                _id: parent.idInventario
            });
        }
    },
    cantidad: Number
}, "entradainventarios");

const resolvers = {
    Query: {
        articulo: (_, args) => ArticuloModel.findOne({
            'codigoDeBarras': args.codigoDeBarras
        }).exec(),
        entradaInventario: async (_, args, {}) => {
            return await EntradaInventarioModel.find({idInventario: args.inventario})
            .populate('idArticulo')
            .populate('idInventario')
            .exec();
        },
    },
    Mutation: {
        addEntradaInventario: (_, args) => {
            var entrada = new EntradaInventarioModel(args)
            return entrada.save();
        },
        addAlmacen: (_, args) => {
            var almacen = new AlmacenModel(args)
            return almacen.save();
        },
        addInventario: (_, args) => {
            var inventario = new InventarioModel(args)
            return inventario.save();
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
});

server.listen(process.env.PORT || 4000).then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});