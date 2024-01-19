import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./pasts/Header";
import Footer from "./pasts/Footer";
import { getRecentComment } from "./json/comments-in-blog-id-1";

const UserLayout = () => {
  // const comments = getRecentComment();
  const { categories, recentposts, recentcomment } = useLoaderData();
  console.log(recentcomment);
  const [search, setSearch] = useState("");
  return (
    <div className=" overflow-x-hidden font-mono">
      <Header categories={categories} />
      <div className="w-screen bg-blue-50 py-16 h-fit">
        <div className=" container mx-auto grid grid-cols-3 gap-16 px-8 ">
          <div className=" col-span-2 flex flex-col ">
            <Outlet />
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="flex flex-col justify-start gap-2">
              <p>Search</p>
              <form className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-2 py-2 w-full rounded border border-black outline-none focus:outline-dotted focus:outline-blue-600 focus:border-0"
                />
                <a
                  href={`/search/${search}`}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded"
                >
                  Search
                </a>
              </form>
            </div>
            {/* recent posts */}
            {/* <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Recent Posts</p>
              {recentposts.length > 0 &&
                recentposts.map((item, index) => {
                  return (
                    <a
                      href={`/${item.slugCategory}/${item.slugBlog}`}
                      key={index}
                      className="text-lg text-blue-600 hover:text-red-500"
                    >
                      {item.title}
                    </a>
                  );
                })}
            </div> */}
            {/* Recent Comments */}
            {/* <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Recent Comments</p>
              {recentcomment.length > 0 &&
                recentcomment.map((item, index) => {
                  return (
                    <p key={index} className="whitespace-normal">
                      <span className="whitespace-nowrap">{item.name}</span>
                      <span className="mx-2">on</span>
                      <a
                        href={`/${item.blog.slugCategory}-${item.blog.categoryId}/${item.blog.slugBlog}`}
                        key={index}
                        className="text-lg text-blue-600 hover:text-red-500"
                      >
                        {item.blog.title}
                      </a>
                    </p>
                  );
                })}
            </div> */}
            {/* Categories */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Categories</p>
              {categories.length > 0 &&
                categories.map((item, index) => {
                  return (
                    <a
                      href={`/category/${item.slugCategory}-${item.id}`}
                      key={index}
                      className="text-lg text-blue-600 hover:text-red-500"
                    >
                      {item.slugCategory}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
