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
    <div className="grid place-items-center mx-2">
      <h1 className=" text-4xl py-4 underline mb-3 text-purple-700 decoration-4 max-w-[700px] decoration-cyan-500 font-bold p-2 text-left">
        A Collection of my programming thoughts
      </h1>
      <ul>
        {blogsData.map((blog) => (
          <li key={blog.filename}>
            <Link to={`/blogs/${blog.filename}`}>
              <div className="card inline-flex max-[580px]:max-w-[360px] w-[800px] my-3 bg-slate-100 rounded-md overflow-hidden shadow-lg ">
                <div className="pl-4 pr-2 pt-4 pb-2">
                  <div className="font-bold text-2xl mb-2 text-fuchsia-600 underline decoration-pink-600 decoration-2">
                    {blog.title}
                  </div>
                  <p className="text-grey-darker text-base  font-thin">
                    {blog.description}
                  </p>
                </div>
                <div className="px-4 pb-2 text-right">
                  <span className="italic underline decoration-2 decoration-emerald-500  inline-block bg-grey-lighter rounded-full text py-1 text-sm font-semibold text-grey-darker mr-2  text-emerald-500">
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
