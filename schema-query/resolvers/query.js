import { profiles, users } from "../data/db.js";

export const resolver = {
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
  featuredProduct: () => ({
    name: "Notebook",
    price: 1999.99,
    disccount: 0.5,
  }),
  lotteryNumbers: () =>
    Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort((a, b) => a - b),
  users: () => users,
  user: (_, { id }) => users.find((user) => user.id == id),
  profiles: () => profiles,
  profile: (_, { id }) => profiles.find((profile) => profile.id == id),
};
