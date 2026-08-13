import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth";

// Mounts every Better Auth endpoint (sign-in, sign-up, session, callbacks, …)
// under /api/auth/*. The client in lib/auth-client.ts talks to these.
export const { GET, POST } = toNextJsHandler(auth);
