import { vi } from "vitest";
import "@testing-library/jest-dom";

// Mock MDX files
vi.mock("*.mdx", () => ({
  default: {
    metadata: {
      title: "",
      date: "",
      description: "",
      slug: "",
      filename: "",
    },
    default: () => null,
  },
}));

// Mock import.meta.glob
vi.stubGlobal("import.meta", {
  glob: () => ({
    "../../../blogs/test-post.mdx": () =>
      Promise.resolve({
        metadata: {
          title: "Test Post",
          date: "2024-03-18",
          description: "Test description",
          slug: "test-post",
          filename: "test-post.mdx",
        },
        default: () => null,
      }),
  }),
});
