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
        articulo: Articulo
        inventario: Inventario
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

Mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to DB')
});

const ArticuloModel = Mongoose.model("Articulo", {
    nombre: String,
    codigoDeBarras: String,
    codigo: String
});
const InventarioModel = Mongoose.model("Inventario", {
    almacen: {type: Mongoose.Schema.Types.ObjectId, ref: 'Almacen'},
    nombre: String
});
const AlmacenModel = Mongoose.model("Almacen", {
    nombre: String
});
const EntradaInventarioModel = Mongoose.model("EntradaInventario", {
    idArticulo: {type: Mongoose.Schema.Types.ObjectId, ref: 'Articulo'},
    idInventario: {type: Mongoose.Schema.Types.ObjectId, ref: 'Inventario'},
    cantidad: Number
});

const resolvers = {
    Query: {
        articulo: (_, args) => ArticuloModel.findOne({
            'codigoDeBarras': args.codigoDeBarras
        }).exec(),
        entradaInventario: (_, args) => EntradaInventarioModel.find({
            idInventario: args.inventario
        }).populate('articulos').exec(),
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
