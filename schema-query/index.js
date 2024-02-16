import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
  # Custom scalar to represent a Date
  scalar Date

  # Entry point for the schema
  type Query {
    hello: String
    hour: Date
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    hour: () => new Date(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
