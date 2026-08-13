import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

import * as schema from "./schema";

// Neon's serverless driver talks over WebSockets, which need an implementation
// in Node. Node 22+ ships a global one, but wiring up `ws` keeps this working on
// any runtime. We use the Pool/WebSocket driver (not neon-http) because Better
// Auth performs multi-statement writes that rely on transactions.
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add your Neon connection string to .env.local (see .env.example).",
  );
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool, { schema });
