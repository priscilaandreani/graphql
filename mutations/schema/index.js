import { mergeTypeDefs } from "@graphql-tools/merge";
import { Query } from "./query.js";
import { Users } from "./users.js";

const types = [Product, Query, Users];

export default mergeTypeDefs(types);
