import React from "react";
import { Link } from "react-router-dom";
// import blogsData from "../blogs/blogs.json";

interface BlogData {
  title: string;
  filename: string;
  date: string;
  description: string;
}

const blogsData: BlogData[] = [
  {
    title: "React & Vite: A match made in heaven",
    filename: "react-vite.mdx",
    date: "11 | 06 | 2023",
    description:
      "A basic overview of Vite & how it makes for a great development experience",
  },
  {
    title: "A demo of react-markdown",
    filename: "react-markdown.mdx",
    date: "15 | 09 | 2022",
    description:
      "A demo of react-markdown, with syntax higlighting in codeblocks along with passing components",
  },
  {
    title: "animation-iteration-count: A CSS Rabbithole",
    filename: "animation-iteration-count-css-rabbithole.mdx",
    date: "18 | 07 | 2022",
    description:
      "How my seeming stubborness for sticking to CSS instead of JS for iteration count led me down a time sink",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="mx-2 grid place-items-center">
      <h1 className=" mb-3 max-w-[700px] p-2 py-4 text-left text-4xl font-bold text-purple-700 underline decoration-cyan-500 decoration-4">
        A Collection of my programming thoughts
      </h1>
      <ul>
        {blogsData.map((blog) => (
          <li key={blog.filename}>
            <Link to={`/blogs/${blog.filename}`}>
              <div className="card my-3 inline-flex w-[800px] overflow-hidden rounded-md bg-slate-100 shadow-lg max-[580px]:max-w-[360px] ">
                <div className="pb-2 pl-4 pr-2 pt-4">
                  <div className="mb-2 text-2xl font-bold text-fuchsia-600 underline decoration-pink-600 decoration-2">
                    {blog.title}
                  </div>
                  <p className="text-grey-darker text-base  font-thin">
                    {blog.description}
                  </p>
                </div>
                <div className="px-4 pb-2 text-right">
                  <span className="bg-grey-lighter text text-grey-darker mr-2  inline-block rounded-full py-1 text-sm font-semibold italic text-emerald-500 underline decoration-emerald-500  decoration-2">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
