import { Hono } from "hono";
import { handle } from "hono/vercel";
import { swaggerUI } from "@hono/swagger-ui";

const app = new Hono().basePath("/api/v1");

app.get("/", (c) => {
  return c.json({
    message: "Hello Ai Lak!",
  });
});

app.get(
  "/ui",
  swaggerUI({
    url: "/api/v1",
    version: "2.0",
  }),
);

export const handler = handle(app);
