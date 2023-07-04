import React, { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";

const LazyIter = lazy(
  () =>
    // eslint-disable-next-line import/no-webpack-loader-syntax
    import(
      "!@mdx-js/loader!../blogs/animation-iteration-count-css-rabbithole.mdx"
    )
);

const LazyContent = lazy(
  // eslint-disable-next-line import/no-webpack-loader-syntax
  () => import("!@mdx-js/loader!../blogs/sample-blog.mdx")
);

const MdxComponent: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const sampleBlogCheck = "sample-blog.mdx";
  const animationBlogCheck = "animation-iteration-count-css-rabbithole.mdx";
  return (
    <div className="BlogIndi">
      <Link to="/blogs">
        <h3>{"<<Back to Blogs"}</h3>
      </Link>
      <div>
        {sampleBlogCheck === filename && (
          <Suspense fallback={<Spinner />}>
            <LazyContent />
          </Suspense>
        )}
      </div>
      <div>
        {animationBlogCheck === filename && (
          <Suspense fallback={<Spinner />}>
            <LazyIter />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default MdxComponent;
