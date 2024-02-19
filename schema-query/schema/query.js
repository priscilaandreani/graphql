export const Query = /* GraphQL */ `
  scalar Date

  # Entry point for the schema
  type Query {
    hello: String
    hour: Date
    loggedUser: User
    featuredProduct: Product
    lotteryNumbers: [Int!]!
    users: [User!]!
    user(id: ID): User
    profiles: [Profile!]!
    profile(id: ID): Profile
  }
`;
