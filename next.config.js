/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    //   remarkPlugins: [remarkGfm],
    //   rehypePlugins: [],
  },
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "ts", "tsx", "mdx", "md"],
  experimental: {
    mdxRs: true,
  },
  transpilePackages: ["@ailak/ui", "@ailak/core", "@ailak/api"],
};

export default withMDX(config);
