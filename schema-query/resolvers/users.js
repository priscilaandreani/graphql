import { profiles } from "../data/db.js";

export const resolver = {
  salary: (user) => user.net_salary,
  profile: (user) => profiles.find((profile) => profile.id == user.profile_id),
};
