import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import type { AppRouter } from ".";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from ".";

export const transformer = superjson;
