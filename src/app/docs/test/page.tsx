import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs";

export default async function DocsPage() {
  const fixturePath = path.join(process.cwd(), "docs/index.mdx");
  const source = await fs.promises.readFile(fixturePath, "utf8");

  return (
    <div>
      <MDXRemote
        source={source}
        options={{
          mdxOptions: { remarkPlugins: [] },
          parseFrontmatter: true,
        }}
      />
    </div>
  );
}
