import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  const viteConfig: UserConfig = {
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), mdx.default()],
  };

  return viteConfig;
});
