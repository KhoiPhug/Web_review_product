import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCategoryById } from "../json/categories";
import CommentBox from "../component/CommentBox";
import Comment from "../component/Comment";

const Blog = () => {
  const { blog, comment } = useLoaderData();
  console.log(blog);
  const { blogsResponseModel, categoriesResponseModel, totalComment } = blog;
  const formattedString = blogsResponseModel.content
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t");

  // Hàm để định dạng commentDate
  function formatCommentDate(commentDate) {
    const date = new Date(commentDate);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} AT ${formatAMPM(date)}`;
    return formattedDate;
  }

  // Hàm để định dạng giờ theo định dạng 12 giờ AM/PM
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 giờ chuyển thành 12 giờ
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  // const Comment = ({ comment }) => {
  //   const { data, children } = comment;
  //   const { id, blogId, name, email, website, content, parentId, commentDate } =  data;    

  //   const [isReply, setIsReply] = useState(false);

  //   return (
  //     <div>
  //       <div className=" flex flex-col gap-4 mt-4">
  //         <div className="flex items-center justify-start gap-6">
  //           <img
  //             src="https://secure.gravatar.com/avatar/7b0c4f46bd52af461738ee0f780de10d?s=50&d=mm&r=g"
  //             className=" rounded-full"
  //             alt=""
  //           />
  //           <div className=" flex flex-col text-blue-600">
  //             <h3 className=" font-semibold">{data.name}</h3>
  //             <p>{formatCommentDate(data.commentDate)}</p>
  //           </div>
  //         </div>
  //         <p>{data.content}</p>
  //         <div className="flex justify-end text-blue-600">
  //           <button
  //             onClick={() => {
  //               setIsReply(!isReply);
  //               console.log(isReply, data.parentId);
  //             }}
  //           >
  //             Reply
  //           </button>
  //         </div>
  //         <CommentBox blogId={blog.blogsResponseModel.id} isReply={true} parentId={data.parentId}/>
  //       </div>

  //       {children && children.length > 0 && (
  //         <div className=" flex flex-col gap-4 mt-4 px-8">
  //           {children.map((item, index) => (
  //             <Comment key={index} comment={item} />
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  const CommentTree = ({ comments, blogId }) => {
    return (
      <div className="mb-8 mt-8">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col px-12 py-14 bg-white mb-8 last:mb-0 justify-start"
          >
            {index === 0 && (
              <h1 className="text-2xl mb-8">
                {totalComment} thoughts on "{blogsResponseModel.title}"
              </h1>
            )}
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white px-12 py-14 gap-4">
        <h1 className=" font-semibold text-3xl">{blogsResponseModel.title}</h1>
        <p className=" text-blue-500">
          <span
            onClick={() => {
              const comment = document.getElementById("comment");
              if (comment) {
                comment.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className=" cursor-pointer"
          >
            {totalComment} Comment
          </span>{" "}
          /
          <a
            href={`/category/${categoriesResponseModel.slugCategory}-${categoriesResponseModel.id}`}
          >
            {" "}
            {categoriesResponseModel.category}
          </a>{" "}
          /<span> {blogsResponseModel.dateSubmitted}</span>
        </p>
        <div
          className=" leading-loose content"
          dangerouslySetInnerHTML={{ __html: formattedString }}
        ></div>
      </div>
      <div className="px-16 py-8 ">
        <p
          className="cursor-pointer text-blue-600 hover:-translate-y-1 hover:shadow w-fit px-2 py-1 shadow-black transition-transform duration-200 ease-in-out hover:text-red-500"
          onClick={() => window.history.back()}
        >
          ← Back to previous page
        </p>
      </div>
      <p id="comment"></p>
      <CommentBox blogId={blog.blogsResponseModel.id} />

      {totalComment > 0 && (
        <CommentTree comments={comment} blogId={blogsResponseModel.id} />
      )}
    </div>
  );
};

export default Blog;
