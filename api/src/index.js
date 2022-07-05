const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()
const port = process.env.PORT || 4000

const typeDefs = gql `
  type Query {
      hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'hello'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({app, path: '/api'})

app.get('/', (req, res) => res.send('hello world'))

app.listen({ port }, () => console.log(`server running at localhost:${port}${server.graphqlPath}`))