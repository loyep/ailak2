// import { Client } from "@planetscale/database";
// import { drizzle } from "drizzle-orm/planetscale-serverless";
import mysql from "mysql2/promise";

import { env } from "@/env";

import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

// export const db = drizzle(
//   new Client({
//     url: env.DATABASE_URL,
//   }).connection(),
//   { schema },
// );

import { drizzle } from "drizzle-orm/mysql2";

const poolConnection = mysql.createPool({
  uri: env.DATABASE_URL,
});

export const db = drizzle(poolConnection, { schema, mode: "default" });
