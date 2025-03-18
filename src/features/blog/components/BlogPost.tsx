import React, { useEffect, useState, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../utils/blogUtils";
import Spinner from "../../../components/ui/Spinner";
import NotFound from "../../../components/ui/NotFound";

const BlogPost: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState<{
    metadata: {
      title: string;
      date: string;
      description: string;
      slug: string;
      filename: string;
    };
    Content: React.ComponentType;
  } | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!filename) {
        setLoading(false);
        return;
      }

      // Extract slug from filename (remove extension)
      const slug = filename.replace(/\.(mdx?|jsx?)$/, "");

      try {
        const post = await getBlogPostBySlug(slug);
        setBlogPost(post);
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [filename]);

  if (loading) {
    return <Spinner />;
  }

  if (!blogPost) {
    return <NotFound />;
  }

  const { Content } = blogPost;

  return (
    <div className="text-black">
      <Link to="/blogs">
        <h3 className="my-3 text-xl">{"<<Back to Blogs"}</h3>
      </Link>
      <div className="w-[600px] max-[580px]:max-w-[360px]">
        <Suspense fallback={<Spinner />}>
          <div className="prose-ul: prose list-none py-8 font-sans prose-h1:text-purple-700 prose-h1:underline prose-h1:decoration-cyan-500 prose-h2:my-3 prose-h2:text-fuchsia-600 prose-h2:underline prose-h2:decoration-pink-600 prose-p:m-0 prose-blockquote:bg-green-300 prose-hr:my-[5px] prose-hr:border-black">
            <Content />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPost;
