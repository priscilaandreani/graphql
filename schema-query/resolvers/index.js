import { resolver as Product } from "./product.js";
import { resolver as Query } from "./query.js";
import { resolver as User } from "./users.js";

export const resolvers = {
  Query,
  Product,
  User,
};
