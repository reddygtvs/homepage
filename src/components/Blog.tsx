import React from "react";
import { Link } from "react-router-dom";
// import blogsData from "../blogs/blogs.json";

interface BlogData {
  title: string;
  filename: string;
}

const blogsData: BlogData[] = [
  {
    title: "Sample blog to test out routes",
    filename: "sample-blog.mdx",
  },
  {
    title: "animation-iteration-count: A CSS Rabbithole",
    filename: "animation-iteration-count-css-rabbithole.mdx",
  },
  // Add more blog entries here
];

const Blog: React.FC = () => {
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
