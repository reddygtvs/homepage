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
    <div className="p-30 grid place-items-left mx-4">
      <h1 className="name underline mb-3 decoration-purple-600">Blogs</h1>
      <ul>
        {blogsData.map((blog) => (
          <li className="text-black" key={blog.filename}>
            <Link to={`/blogs/${blog.filename}`}>
              <h2 className="App-link my-2 text-xl underline decoration-green-500 hover:no-underline">
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
