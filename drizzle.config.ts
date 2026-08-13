import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// drizzle-kit runs outside Next.js, so it doesn't auto-load env files. Load the
// same ones Next reads (either .env.local or .env works for DATABASE_URL).
config({ path: [".env.local", ".env"] });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
