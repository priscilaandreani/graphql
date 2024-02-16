import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
  # Custom scalar to represent a Date
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  # Entry point for the schema
  type Query {
    hello: String
    hour: Date
    loggedUser: User
  }
`;

const resolvers = {
  User: {
    salary: (user) => user.net_salary,
  },

  Query: {
    hello: () => "Hello, world!",
    hour: () => new Date(),
    loggedUser: () => ({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25,
      net_salary: 4579.51,
      vip: true,
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
