import React, { useState } from 'react';
import PropTypes from "prop-types";
import CommentBox from './CommentBox';


const Comment = ({ comment }) => {
  const { data, children } = comment;

  const [isReply, setIsReply] = useState(false);

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

  return (
    <div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-start gap-6">
          <img
            src="https://secure.gravatar.com/avatar/7b0c4f46bd52af461738ee0f780de10d?s=50&d=mm&r=g"
            className="rounded-full"
            alt=""
          />
          <div className="flex flex-col text-blue-600">
            <h3 className="font-semibold">{data.name}</h3>
            <p>{formatCommentDate(data.commentDate)}</p>
          </div>
        </div>
        <p>{data.content}</p>
        <div className="flex justify-end text-blue-600">
          <button
            onClick={() => {
              setIsReply(!isReply);
            }}
          >
            Reply
          </button>
        </div>
        {isReply && (
          <CommentBox blogId={data.blogId} isReply={true} parentId={data.id} />
        )}
      </div>

      {children && children.length > 0 && (
        <div className="flex flex-col gap-4 mt-4 px-8">
          {children.map((item, index) => (
            <Comment key={index} comment={item} />
          ))}
        </div>
      )}
    </div>
  );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};

export default Comment;
