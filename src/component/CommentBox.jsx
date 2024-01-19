import React, { useState } from "react";
import PropTypes from "prop-types";
import { postComment } from "../json/comments-in-blog-id-1";

const CommentBox = ({ blogId, isReply=false , parentId = null}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [content, setContent] = useState("");
  // const commentDate = new Date().toLocaleDateString("en-US");
  const commentDate = new Date().getTime();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await postComment({
      blogId,
      name,
      email,
      website,
      content,
      commentDate,
      parentId,
    });
    window.location.reload();
  };
  return (
    <form
      id="commentbox"
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col bg-white px-12 py-14 gap-6"
    >
      <p className="flex flex-col gap-2">
        {!isReply && <span id="titlecomment" className="text-3xl">
          Leave a Comment
        </span>}
        {isReply && <span id="titlecomment" className="text-3xl">
          Reply a Comment
        </span>}
        {!isReply && <span className=" opacity-80">
          Your email address will not be published. Required fields are marked *
        </span>}
      </p>
      <textarea
        placeholder="Type here..."
        id="content"
        cols="30"
        rows="10"
        name="content"
        onChange={(e) => {
          let content_ = e.target.value;
          setContent(content_);
        }}
        className=" outline-black px-2 py-4 border border-black placeholder:text-black placeholder:font-semibold rounded"
      />
      <div className=" grid grid-cols-3 gap-6">
        <input
          className="p-2 outline-black rounded border border-black placeholder:text-black placeholder:font-semibold"
          type="text"
          name="name"
          placeholder="Name*"
          onChange={(e) => {
            let name_ = e.target.value;
            setName(name_);
          }}
        />
        <input
          className="p-2 outline-black rounded border border-black placeholder:text-black placeholder:font-semibold"
          type="email"
          name="email"
          placeholder="Email*"
          onChange={(e) => {
            let email_ = e.target.value;
            setEmail(email_);
          }}
        />
        <input
          className="p-2 outline-black rounded border border-black placeholder:text-black placeholder:font-semibold"
          type="text"
          name="website"
          placeholder="Website*"
          onChange={(e) => {
            let website_ = e.target.value;
            setWebsite(website_);
          }}
        />
      </div>
      {/* <div className="flex gap-4 items-center whitespace-nowrap tracking-tight">
        <input type="checkbox" />
        <p>
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
      </div> */}
      <button className="px-8 py-2 rounded bg-blue-600 text-center text-white font-semibold w-fit">
        Post Comment
      </button>
    </form>
  );
};

CommentBox.propTypes = {
  blogId: PropTypes.number,
};

export default CommentBox;
