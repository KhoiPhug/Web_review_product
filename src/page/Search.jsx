import React from "react";
import { useLoaderData } from "react-router-dom";
import NavigationPage from "../component/NavigationPage";
import CardBlog from "../component/CardBlog";

const Search = () => {
  const { key, blogs } = useLoaderData();
  console.log(blogs);
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col bg-white ">
        <div className="px-12 py-16 text-3xl font-semibold border-b border-black flex flex-col gap-4">
          <p className="flex items-center justify-start text-base gap-2 font-normal">
            <a href="/" className=" text-blue-600">
              Home
            </a>
            <span>»</span>
            <span>Search</span>
          </p>
          <p>
            {blogs.totalItem == 0
              ? `No results were found for "${key}"`
              : `Search for "${key}" found ${blogs.totalItem} results`}
          </p>
        </div>
        {blogs.listResult.length > 0 &&
          blogs.listResult.map((item, index) => {
            return <CardBlog blog={item} key={index} />;
          })}
      </div>
      <NavigationPage currentPage={blogs.page} lastPage={blogs.totalPage} />
    </div>
  );
};

export default Search;
