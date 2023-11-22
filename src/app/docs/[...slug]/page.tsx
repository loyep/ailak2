import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

const docsPath = path.join(process.cwd(), "docs");

const slugToPath = (slug: string[]) => {
  let slugPath = slug.join("/");
  console.log(slugPath)
  if (slugPath === "") {
    slugPath = "index";
  }
  if (fs.existsSync(path.join(docsPath, `${slugPath}.mdx`))) {
    return `${slugPath}.mdx`;
  }
  if (fs.existsSync(path.join(docsPath, `${slugPath}/index.mdx`))) {
    return `${slugPath}/index.mdx`;
  }
  return `${slugPath}.mdx`;
}

const getData = async ({ slug }: { slug: string[] }) => {
  try {
    const slugPath = slugToPath(slug);
    console.log('slug path', slugPath)
    const fixturePath = path.join(docsPath, slugPath);
    console.log('fixture path', fixturePath)
    const source = await fs.promises.readFile(fixturePath, "utf8");

    const { content, frontmatter: meta } = await compileMDX({
      source,
      options: { parseFrontmatter: true },
      components: {},
    });
    return {
      content,
      meta,
      title: meta.title as string,
      date: meta.date as string,
    };
  } catch {
    notFound();
  }
};

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = await getData({ slug: params.slug });

  return {
    title,
  };
}

export default async function DocsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { content } = await getData({ slug: params.slug });

  return <div>{content}</div>;
}
