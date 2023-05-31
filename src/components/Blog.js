import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../blogs/blogs.json";
import MdxComponent from "./MdxComponent";

const Blog = () => {
  return (
    <div className="Blog-home">
      <h1 className="name">Blog</h1>
      <p id="black">Coming soon, working on setting up routing & MDX...</p>
      <ul>
        {blogsData.map((blog) => (
          <li className="BlogLink" key={blog.filename}>
            <Link to={`/blogs/${blog.filename}`}>
              <h2 id="BlogClick">{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <MdxComponent />
    </div>
  );
};

export default Blog;
