import React from "react";
import { getBlogByCategoryId } from "../json/blogs-all";
import CardBlog from "../component/CardBlog";
import NavigationPage from "../component/NavigationPage";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { getCategoryBySlug } from "../json/categories";

const Category = () => {
  const { blogs, category } = useLoaderData();

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
            <span>{category.category}</span>
          </p>
          <p>{category.category}</p>
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

export default Category;
