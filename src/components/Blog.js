import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../blogs/blogs.json";
import MdxComponent from "./MdxComponent";

const Blog = () => {
  return (
    <div className="BlogHome">
      <h1 className="name">Blogs</h1>
      <ul>
        {blogsData.map((blog) => (
          <li className="BlogLink" key={blog.filename}>
            <Link to={`/blogs/${blog.filename}`}>
              <h2 id="BlogClick" className="App-link">
                {blog.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
