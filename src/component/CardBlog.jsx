import React from "react";
import PropTypes from "prop-types";

const CardBlog = ({ blog }) => {
  const { blogsResponseModel, categoriesResponseModel, totalComment } = blog;
  const contentFormattedString = blogsResponseModel.content.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
  return (
    <div className="px-12 py-14 border-b last:border-b-0 border-black flex flex-col gap-4 text-lg">
      <a
        href={`/${categoriesResponseModel.slugCategory}-${categoriesResponseModel.id}/${blogsResponseModel.slugBlog}`}
        className="text-2xl font-semibold"
      >
        {blogsResponseModel.title}
      </a>
      <a
        href={`/category/${categoriesResponseModel.slugCategory}-${categoriesResponseModel.id}`}
        className="cursor-pointer hover:text-red-500 text-blue-600"
      >
        {`${
          totalComment > 0 ? totalComment + " Comments" : "Leave a Comment"
        } / ${categoriesResponseModel.category}`}
      </a>
      <p
        className="line-clamp"
        dangerouslySetInnerHTML={{ __html: contentFormattedString }}
      />
      <a
        className=" cursor-pointer hover:text-red-500 text-blue-600"
        href={`/${categoriesResponseModel.slugCategory}-${categoriesResponseModel.id}/${blogsResponseModel.slugBlog}`}
      >
        Read More »
      </a>
    </div>
  );
};

CardBlog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default CardBlog;
