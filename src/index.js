const { ApolloServer, gql } = require('apollo-server');
const MongoClient = require('mongodb').MongoClient

const { resolvers } = require("./resolvers")
const typeDefs = require("./typeDefs")

// connection
const databaseName = "apollo_starter"
const client = new MongoClient("mongodb://localhost/apollo_starter", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect(function (err) {
    if (err) console.log(err)
    db = client.db(databaseName)
})

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});