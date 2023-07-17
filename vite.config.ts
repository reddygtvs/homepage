import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
// import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), viteTsconfigPaths(), svgrPlugin(), mdx()],
// });

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  const viteConfig: UserConfig = {
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), mdx.default()],
  };

  return viteConfig;
});
