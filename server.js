const {
    ApolloServer,
    gql
} = require('apollo-server');
const urlDB = "mongodb+srv://rodridlc:Mauricio10@cluster0-gitot.azure.mongodb.net/inventarios?retryWrites=true&w=majority";
const Mongoose = require("mongoose");



server.listen(process.env.PORT || 4000).then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});
