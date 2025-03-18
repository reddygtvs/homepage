import React, { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import LazyBlog from "./LazyBlog";

const LazyIter = lazy(
  () => import("/src/blogs/animation-iteration-count-css-rabbithole.mdx"),
);

const LazyContent = lazy(() => import("/src/blogs/react-markdown.mdx"));

const LazyViteContent = lazy(() => import("/src/blogs/react-vite.mdx"));

const MdxComponent: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const sampleBlogCheck = "react-markdown.mdx";
  const animationBlogCheck = "animation-iteration-count-css-rabbithole.mdx";
  const viteCheck = "react-vite.mdx";
  return (
    <div className="text-black">
      <Link to="/blogs">
        <h3 className="my-3 text-xl">{"<<Back to Blogs"}</h3>
      </Link>
      <div className="w-[600px] max-[580px]:max-w-[360px]">
        <LazyBlog
          filename={filename || ""}
          blogCheck={viteCheck}
          Content={LazyViteContent}
        />
        <LazyBlog
          filename={filename || ""}
          blogCheck={sampleBlogCheck}
          Content={LazyContent}
        />
        <LazyBlog
          filename={filename || ""}
          blogCheck={animationBlogCheck}
          Content={LazyIter}
        />
      </div>
    </div>
  );
};

export default MdxComponent;
