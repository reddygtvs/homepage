import matter from "gray-matter";

export interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  filename: string;
}

// This function will be used to get all blog posts
export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  // Use Vite's import.meta.glob to get all MDX files
  const mdxFiles = import.meta.glob("/src/blogs/*.mdx", { eager: true });
  const mdFiles = import.meta.glob("/src/blogs/*.md", { eager: true });

  console.log("MDX Files:", mdxFiles);
  console.log("MD Files:", mdFiles);

  const allFiles = { ...mdxFiles, ...mdFiles };
  console.log("All Files:", allFiles);

  // Process each file to extract metadata
  const blogPosts = Object.entries(allFiles).map(
    ([path, module]: [string, any]) => {
      console.log("Processing file:", path);
      console.log("Module:", module);

      // Extract filename from path
      const filename = path.split("/").pop() || "";

      // Get frontmatter from the module
      let frontmatter: Record<string, any> = {};

      if (module.frontmatter) {
        console.log("Found frontmatter:", module.frontmatter);
        frontmatter = module.frontmatter;
      } else if (module.default && typeof module.default === "string") {
        console.log("Found raw string content");
        const { data } = matter(module.default);
        frontmatter = data;
      } else if (module.default && module.default.frontmatter) {
        console.log("Found frontmatter in default export");
        frontmatter = module.default.frontmatter;
      }

      console.log("Final frontmatter:", frontmatter);

      // Create slug from filename (remove extension)
      const slug = filename.replace(/\.(mdx?|jsx?)$/, "");

      const post = {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "No date",
        description: frontmatter.description || "No description",
        slug,
        filename,
      };

      console.log("Created blog post:", post);
      return post;
    },
  );

  // Sort by date (newest first)
  return blogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

interface MDXModule {
  default: React.ComponentType & {
    frontmatter?: Record<string, any>;
  };
  frontmatter?: Record<string, any>;
}

// This function will be used to get a specific blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<{
  metadata: BlogMetadata;
  Content: React.ComponentType;
} | null> {
  try {
    // Use the same glob pattern as getAllBlogPosts
    const mdxFiles = import.meta.glob<MDXModule>("/src/blogs/*.mdx", {
      eager: true,
    });
    const mdFiles = import.meta.glob<MDXModule>("/src/blogs/*.md", {
      eager: true,
    });
    const allFiles = { ...mdxFiles, ...mdFiles };

    // Find the file that matches our slug
    const filePath = Object.keys(allFiles).find(
      (path) => path.endsWith(`${slug}.mdx`) || path.endsWith(`${slug}.md`),
    );

    if (!filePath) {
      console.error("Blog post not found:", slug);
      return null;
    }

    const module = allFiles[filePath];
    const filename = filePath.split("/").pop() || "";

    // Extract frontmatter
    let frontmatter: Record<string, any> = {};
    if (module.frontmatter) {
      frontmatter = module.frontmatter;
    } else if (module.default && typeof module.default === "string") {
      const { data } = matter(module.default);
      frontmatter = data;
    } else if (module.default && module.default.frontmatter) {
      frontmatter = module.default.frontmatter;
    }

    return {
      metadata: {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "No date",
        description: frontmatter.description || "No description",
        slug,
        filename,
      },
      Content: module.default,
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    return null;
  }
}
