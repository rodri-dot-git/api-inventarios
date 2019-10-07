require("dotenv").config()
require("mongoose").connect(process.env.DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
const ApolloServer = require('apollo-server').ApolloServer
const {
	typeDefs,
	resolvers
} = require('./graphql')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true
});

server.listen(process.env.PORT || 4000).then(({
	url
}) => console.log(`🚀🚀 Server ready at ${url}`));