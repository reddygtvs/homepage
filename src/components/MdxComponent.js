/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!@mdx-js/loader!../blogs/sample-blog.mdx";
import { Link, useParams } from "react-router-dom";
const MdxComponent = () => {
  const { filename } = useParams();
  const sampleBlogCheck = "sample-blog.mdx";
  return (
    <div>
      <Link to="/blogs">
        <h3>Back to Blogs</h3>
      </Link>
      <div className="BlogIndi">
        {sampleBlogCheck === filename && <Content />}
      </div>
    </div>
  );
};

export default MdxComponent;
