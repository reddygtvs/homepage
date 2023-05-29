/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!@mdx-js/loader!../blogs/sample-blog.mdx";

const MdxComponent = () => {
  return <Content />;
};

export default MdxComponent;
