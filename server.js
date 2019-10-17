const dotenv = require("dotenv")
const Mongoose = require("mongoose")
const ApolloServer = require('apollo-server-express').ApolloServer
const {
	typeDefs,
	resolvers
} = require('./graphql')
const { moesifMiddleware } = require('./middleware')
const express = require('express')
const rollbar = require('./utils').rollbar
dotenv.config()

const app = express();

Mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true
});

app.use(moesifMiddleware)
server.applyMiddleware({
	app,
	path: '/',
	gui: process.env.DEBUG
})

app.listen((process.env.PORT || 4000), () => {
	rollbar.info('🚀🚀 Server ready')
	console.log('🚀🚀 Server ready')
});