import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";

const LazyProjects = React.lazy(() => import("./components/Projects"));
const LazyBlog = React.lazy(() => import("./components/Blog"));
const LazyMdxComponent = React.lazy(() => import("./components/MdxComponent"));

const Router: React.FC = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] place-items-center">
      <Header />
      {/* the bottom may not be necessary??? */}
      <div className="grid place-items-center w-full">
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyProjects />
              </Suspense>
            }
          />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyBlog />
              </Suspense>
            }
          />
          <Route
            path="/blogs/:filename"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyMdxComponent />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
