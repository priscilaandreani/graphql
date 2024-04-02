export const Users = /* GraphQL */ `
  enum UserStatus {
    ACTIVE
    INACTIVE
    BLOCKED
  }

  enum ProfileType {
    ADMIN
    USER
  }

  type Profile {
    id: ID!
    type: ProfileType!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
    status: UserStatus
  }
`;
