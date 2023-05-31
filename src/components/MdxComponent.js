/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!@mdx-js/loader!../blogs/sample-blog.mdx";
import { useParams } from "react-router-dom";
const MdxComponent = () => {
  const { filename } = useParams();
  const sampleBlogCheck = "sample-blog.mdx";
  return (
    <div className="BlogIndi">
      {sampleBlogCheck === filename && <Content />}
    </div>
  );
};

export default MdxComponent;
