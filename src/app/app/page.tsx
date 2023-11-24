import { getEdgeConfig } from "@ailak/core";

export default async function AppPage() {
  const edgeConfig = await getEdgeConfig();

  return <div>{JSON.stringify(edgeConfig)}</div>;
}
