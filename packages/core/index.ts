import { get } from "@vercel/edge-config";

export function getEdgeConfig() {
  return get("edge-config");
}
