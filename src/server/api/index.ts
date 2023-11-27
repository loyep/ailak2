import { Hono } from "hono";
import { handle } from "hono/vercel";
import { db } from "../db";

const app = new Hono().basePath("/api/v1");

app.get("/", (c) => {
  return c.json({
    message: "Hello Ai Lak!",
  });
});

app.get("/users", async (c) => {
  const users = await db.query.users.findMany();
  return c.json(users);
});

export const handler = handle(app);
