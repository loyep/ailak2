import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { type Metadata } from "next";
import glob from 'fast-glob'
import { notFound } from "next/navigation";
import { Mdx } from "@/layouts/docs/mdx";

const docsPath = path.join(process.cwd(), "docs");

const slugToPath = (slug: string[]) => {
  const slugPath = slug.join("/");
  const paths = [`${slugPath}.(mdx|md)`, path.join(slugPath, 'index.(mdx|md)')]
  const files = glob.sync(paths, {
    cwd: docsPath,
    onlyFiles: true,
  })
  return files[0]!
}

const getData = async ({ slug }: { slug: string[] }) => {
  try {
    const slugPath = slugToPath(slug);
    const fixturePath = path.join(docsPath, slugPath);
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
  const { content, title } = await getData({ slug: params.slug });

  return (
    <>
      {/* Page header */}
      <div className="h-16 flex items-center mb-6">
        {/* <TopicTitle name={post.topic.name} segment={post.topic.slug} /> */}
      </div>

      <article className="flex xl:space-x-12">

        {/* Main area */}
        <div className="min-w-0">

          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden flex items-center mb-8">

            {/* <Hamburger /> */}

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              {/* <span className="text-slate-600 dark:text-slate-400">{post.topic.name}</span> */}
              <svg className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">{title}</span>
            </div>
          </div>

          {/* Article content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 xxl dark:text-slate-200">{title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {/* {post.summary} */}
              </p>
            </header>
            <Mdx>{content}</Mdx>
          </div>

          {/* Feedback */}
          {/* <Feedback /> */}

          {/* Page navigation */}
          {/* <PageNavigation prevArticle={post.prev} nextArticle={post.next} /> */}

          {/* Content footer */}
          {/* <Footer /> */}
        </div>
        {/* Secondary navigation */}
        {/* <SecondaryNav /> */}
      </article>
    </>
  )
}
