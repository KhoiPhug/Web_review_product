import React, { useEffect, useState } from "react";
import NavigationPage from "../component/NavigationPage";
import CardBlog from "../component/CardBlog";
import { useLoaderData, useSearchParams } from "react-router-dom";

const Home = () => {
  const { blogs } = useLoaderData();
  const [search, setSearch] = useSearchParams();
  console.log(blogs);

  return (
    <div className=" flex flex-col">
      <div className="flex flex-col bg-white">
        {blogs.listResult.length > 0 &&
          blogs.listResult.map((item, index) => {
            return <CardBlog blog={item} key={index} />;
          })}
      </div>
      <NavigationPage currentPage={blogs.page} lastPage={blogs.totalPage} />
    </div>
  );
};

export default Home;
