import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers/index.js";
import typeDefs from "./schema/index.js";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
