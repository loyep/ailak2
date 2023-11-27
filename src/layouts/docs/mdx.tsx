import { type PropsWithChildren } from "react";

// const mdxComponents = {
// }

export function Mdx({ children }: PropsWithChildren) {
  return (
    <article className="prose prose-headings:scroll-mt-24 prose-headings:text-slate-800 prose-p:leading-normal prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-slate-800 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-slate-700 prose-pre:bg-slate-800 dark:prose-headings:text-slate-200 dark:prose-strong:text-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 max-w-none text-slate-600 dark:text-slate-400">
      {children}
    </article>
  );
}
