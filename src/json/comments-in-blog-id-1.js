import axios from "axios";

const data = [
  {
    data: {
      id: 1,
      blogId: 1,
      name: "TOÀN",
      email: "toan@gmail.com",
      website: "",
      content: "Chắc a pill come back r",
      parentId: null,
      commentDate: "2023-12-11T15:30:00Z",
    },
    children: [
      {
        data: {
          id: 3,
          blogId: 1,
          name: "ADMIN",
          email: "admin@gmail.com",
          website: "",
          content:
            "Bài này của ông Đạo sĩ trên facebook nha bro. Mình sưu tầm về thôi.",
          parentId: 1,
          commentDate: "2023-12-11T15:34:00Z",
        },
        children: [
          {
            data: {
              id: 4,
              blogId: 1,
              name: "TOÀN",
              email: "toan@gmail.com",
              website: "",
              content: "Cảm ơn bạn đã chia sẽ kiến thức!",
              parentId: 3,
              commentDate: "2023-12-11T15:40:00Z",
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    data: {
      id: 2,
      blogId: 1,
      name: "TRUNG",
      email: "trung@gmail.com",
      website: "",
      content: "Chuyện hẹn hò là chuyện xã hội mà mày????",
      parentId: null,
      commentDate: "2023-12-11T15:36:00Z",
    },
    children: [
      {
        data: {
          id: 5,
          blogId: 1,
          name: "LÊ SÁT",
          email: "sat@gmail.com",
          website: "",
          content:
            "Tao không hiểu là mày định nghĩa thế nào thì là chuyện xã hội?",
          parentId: 2,
          commentDate: "2023-12-11T15:39:00Z",
        },
        children: [],
      },
    ],
  },
];

const getRecentComment = async () => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-comments/recent`
    );

    return (await get).data;
  } catch (error) {
    return [];
  }
};

const getCommentByBlogId = async (id) => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-comments/findOneByBlogId/${id}`
    );

    return (await get).data;
  } catch (error) {
    return [];
  }
};

const postComment = async ({
  blogId,
  name,
  email,
  website,
  content,
  parentId,
  commentDate,
}) => {
  try {
    let post = axios.post(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-comments`,
      {
        blogId: blogId,
        name: name,
        email: email,
        website: website,
        content: content,
        parentId: parentId,
        commentDate: commentDate,
      }
    );

    return (await post).data;
  } catch (error) {
    return null;
  }
};
export { getCommentByBlogId, postComment, getRecentComment };
