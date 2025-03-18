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

// This function will be used to get a specific blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<{
  metadata: BlogMetadata;
  Content: React.ComponentType;
} | null> {
  try {
    // Try to find the file with .mdx extension
    const mdxModule = await import(`/src/blogs/${slug}.mdx`);
    const filename = `${slug}.mdx`;

    // Extract frontmatter
    const frontmatter = mdxModule.frontmatter || {};

    return {
      metadata: {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "No date",
        description: frontmatter.description || "No description",
        slug,
        filename,
      },
      Content: mdxModule.default,
    };
  } catch (error) {
    try {
      // If .mdx not found, try .md
      const mdModule = await import(`/src/blogs/${slug}.md`);
      const filename = `${slug}.md`;

      // For .md files, we need to parse frontmatter manually
      const { data: frontmatter } = matter(mdModule.default);

      return {
        metadata: {
          title: frontmatter.title || "Untitled",
          date: frontmatter.date || "No date",
          description: frontmatter.description || "No description",
          slug,
          filename,
        },
        Content: mdModule.default,
      };
    } catch (mdError) {
      console.error("Blog post not found:", slug);
      return null;
    }
  }
}
