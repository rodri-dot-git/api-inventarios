const {	ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema').schema
const resolvers = require('./graphql')
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios";
const Mongoose = require("mongoose");

Mongoose.connect(urlDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true
});

server.listen(process.env.PORT || 4000).then(({url}) => {
	console.log(`🚀  Server ready at ${url}`);
});