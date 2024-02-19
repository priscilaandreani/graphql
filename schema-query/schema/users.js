export const Users = /* GraphQL */ `
  type Profile {
    id: ID!
    type: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
  }
`;
