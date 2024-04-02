import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    profile_id: 1,
    status: "ACTIVE",
    net_salary: 2500.0,
    vip: true,
  },
  {
    id: uuidv4(),
    name: "Jane Doe",
    email: "jane@exampel.com",
    age: 30,
    profile_id: 2,
    status: "INACTIVE",
    net_salary: 1500.0,
    vip: false,
  },
  {
    id: uuidv4(),
    name: "Alice",
    email: "alice@example.com",
    age: 35,
    profile_id: 1,
    status: "BLOCKED",
    vip: true,
    net_salary: 3500.0,
  },
];

export const profiles = [
  {
    id: 1,
    type: "ADMIN",
  },
  {
    id: 2,
    type: "USER",
  },
];
