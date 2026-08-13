import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    // Extra columns on the `user` table (see db/schema.ts). `input: false` keeps
    // users from setting their own role/active at sign-up — those are assigned
    // by a manager/admin later.
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "Employee",
        input: false,
      },
      active: {
        type: "boolean",
        required: false,
        defaultValue: true,
        input: false,
      },
    },
  },
  // Must stay last: lets Better Auth set cookies from Next.js server actions and
  // route handlers.
  plugins: [nextCookies()],
});
