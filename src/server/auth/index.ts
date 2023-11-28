/* eslint-disable @typescript-eslint/unbound-method */

// import Github from "@auth/core/providers/github";
import GitHub from "next-auth/providers/github";
import type { DefaultSession } from "next-auth";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
// import { mySqlTable } from "../db/schema/_table";
// import { db } from "../db";
import type { NextAuthConfig } from "next-auth";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const config: NextAuthConfig = {
  // adapter: DrizzleAdapter(db, mySqlTable),
  providers: [GitHub],
  debug: process.env.NODE_ENV !== "production",
  // pages: {
  //   signIn: "/sign-in",
  // },
  callbacks: {
    authorized({ request, auth }) {
      console.log("authorized", { request, auth });
      // const { pathname } = request.nextUrl
      // if (pathname === "/middleware-example") return !!auth
      return true;
    },
    // session: ({ session, user }) => ({
    //   ...session,
    //   user: {
    //     ...session.user,
    //     id: user.id,
    //   },
    // }),
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
