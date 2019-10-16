const dotenv = require("dotenv")
const Mongoose = require("mongoose")
const ApolloServer = require('apollo-server-express').ApolloServer
const {
	typeDefs,
	resolvers
} = require('./graphql')
const moesifExpress = require('moesif-express');
const express = require('express')
const rollbar = require('./utils').rollbar
dotenv.config()

const app = express();
const moesifMiddleware = moesifExpress({
	applicationId: process.env.MOESIF_APPLICATION_ID,
	logBody: true,
});

Mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: process.env.DEBUG
});

app.use(moesifMiddleware)
server.applyMiddleware({
	app,
	path: '/'
})

app.listen((process.env.PORT || 4000), () => {
	rollbar.info('🚀🚀 Server ready')
	console.log('🚀🚀 Server ready')
});