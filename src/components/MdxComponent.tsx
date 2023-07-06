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
    // <div className="text-black flex flex-col max-w-[650px] p-30 m-20 font-sans p-3">
    <div className="text-black">
      <Link to="/blogs">
        <h3 className="my-3 text-lg">{"<<Back to Blogs"}</h3>
      </Link>
      <div className="max-[600px]:max-w-[340px]">
        <div>
          {sampleBlogCheck === filename && (
            <Suspense fallback={<Spinner />}>
              <div className="prose p-8 prose-h1:text-purple-700 prose-h1:underline prose-h1:decoration-cyan-500 prose-h2:my-3 prose-p:m-0 font-sans prose-hr:my-[5px] prose-h2:text-fuchsia-600 prose-h2:underline prose-h2:decoration-pink-600 prose-blockquote:bg-slate-300 prose-hr:divide-x-2 border-sky-600">
                <LazyContent />
              </div>
            </Suspense>
          )}
        </div>
        <div>
          {animationBlogCheck === filename && (
            <Suspense fallback={<Spinner />}>
              <div className="prose p-8 prose-h1:text-purple-700 prose-h1:underline prose-h1:decoration-cyan-500 prose-h2:my-3 prose-p:m-0 font-sans prose-hr:my-[5px] prose-h2:text-fuchsia-600 prose-h2:underline prose-h2:decoration-pink-600 prose-blockquote:bg-slate-300 prose-hr:divide-x-2 border-sky-600">
                <LazyIter />
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default MdxComponent;
