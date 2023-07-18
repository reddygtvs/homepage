import React, { Suspense } from "react";
import Spinner from "./Spinner";

interface LazyBlogProps {
  filename: string;
  blogCheck: string;
  Content: React.FC;
}

const LazyBlog: React.FC<LazyBlogProps> = ({
  filename,
  blogCheck,
  Content,
}) => {
  return (
    <div>
      {filename !== undefined && blogCheck === filename && (
        <Suspense fallback={<Spinner />}>
          <div className="prose prose-ul: list-none prose-hr:border-black py-8 prose-h1:text-purple-700 prose-h1:underline prose-h1:decoration-cyan-500 prose-h2:my-3 prose-p:m-0 font-sans prose-hr:my-[5px] prose-h2:text-fuchsia-600 prose-h2:underline prose-h2:decoration-pink-600 prose-blockquote:bg-green-300 ">
            <Content />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default LazyBlog;
