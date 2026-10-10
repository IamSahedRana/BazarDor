import { createAuthClient } from "better-auth/react";


const baseURL =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_APP_URL ?? "https://bazar-dor-blush.vercel.app";

export const authClient = createAuthClient({ baseURL });

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  updateUser,
} = authClient;