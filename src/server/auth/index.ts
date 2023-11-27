/* eslint-disable @typescript-eslint/unbound-method */

import Github from "@auth/core/providers/github";
import type { DefaultSession } from "@auth/core/types";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { mySqlTable } from "../db/schema/_table";
import { db } from "../db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, mySqlTable),
  providers: [Github],
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
