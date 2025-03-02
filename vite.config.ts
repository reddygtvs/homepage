import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  const remarkFrontmatter = await import("remark-frontmatter");
  const remarkMdxFrontmatter = await import("remark-mdx-frontmatter");
  const rehypeHighlight = await import("rehype-highlight");
  const rehypeSlug = await import("rehype-slug");

  const viteConfig: UserConfig = {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      mdx.default({
        remarkPlugins: [
          remarkFrontmatter.default,
          [remarkMdxFrontmatter.default, { name: "frontmatter" }],
        ],
        rehypePlugins: [rehypeHighlight.default, rehypeSlug.default],
      }),
    ],
  };

  return viteConfig;
});
