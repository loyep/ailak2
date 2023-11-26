import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api/v1");

app.get("/", (c) => {
  return c.json({
    message: "Hello Ai Lak!",
  });
});

export const handler = handle(app);
