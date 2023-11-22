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
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(config);
