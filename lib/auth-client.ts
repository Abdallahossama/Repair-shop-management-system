import { createAuthClient } from "better-auth/react";

// Same-origin by default, so no baseURL needed while the app and the auth routes
// live in the same Next.js app. Set `baseURL` here if you ever split them.
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
