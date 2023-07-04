import React from "react";
declare module "*.mdx" {
  const content: React.ComponentType<any>;
  export default content;
}
