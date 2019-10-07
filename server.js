const Mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

Mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const {
	ApolloServer
} = require('apollo-server')
const typeDefs = require('graphql').typeDefs
const resolvers = require('graphql').resolvers

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true
});

server.listen(process.env.PORT || 4000).then(({
	url
}) => {
	console.log(`🚀 Server ready at ${url}`);
});