import React from "react";
import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line import/no-webpack-loader-syntax
import Content from "!@mdx-js/loader!../blogs/sample-blog.mdx";

const MdxComponent: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const sampleBlogCheck = "sample-blog.mdx";
  return (
    <div className="BlogIndi">
      <Link to="/blogs">
        <h3>{"<<Back to Blogs"}</h3>
      </Link>
      <div>{sampleBlogCheck === filename && <Content />}</div>
    </div>
  );
};

export default MdxComponent;
