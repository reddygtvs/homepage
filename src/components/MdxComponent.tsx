import React, { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import LazyBlog from "./LazyBlog";

const LazyIter = lazy(
  () => import("../blogs/animation-iteration-count-css-rabbithole.mdx")
);

const LazyContent = lazy(() => import("../blogs/sample-blog.mdx"));

const MdxComponent: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const sampleBlogCheck = "sample-blog.mdx";
  const animationBlogCheck = "animation-iteration-count-css-rabbithole.mdx";
  return (
    <div className="text-black">
      <Link to="/blogs">
        <h3 className="my-3 text-xl">{"<<Back to Blogs"}</h3>
      </Link>
      <div className="max-[580px]:max-w-[360px] w-[600px]">
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
