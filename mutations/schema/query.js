export const Query = /* GraphQL */ `
  scalar Date

  # Entry point for the schema
  type Query {
    users: [User!]!
    user(id: ID): User
    profiles: [Profile!]!
    profile(id: ID): Profile
  }
`;
