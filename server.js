const Mongoose = require("mongoose")
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios"
Mongoose.connect(urlDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
const {
	ApolloServer
} = require('apollo-server')
const typeDefs = require('./schema').typeDefs
const resolvers = require('./graphql')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true
});

server.listen(process.env.PORT || 4000).then(({url}) => {
	console.log(`🚀 Server ready at ${url}`);
});