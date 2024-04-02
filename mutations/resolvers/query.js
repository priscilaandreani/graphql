import { profiles, users } from "../data/db.js";

export const resolver = {
  users: () => users,
  user: (_, { id }) => users.find((user) => user.id == id),
  profiles: () => profiles,
  profile: (_, { id }) => profiles.find((profile) => profile.id == id),
};
