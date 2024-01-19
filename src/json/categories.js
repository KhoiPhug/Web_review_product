import axios from "axios";

const data = [
  {
    id: 1,
    category: "Daddy issues – Damaged Woman",
    slugCategory: "category-daddy-issues-damaged-woman",
  },
  {
    id: 2,
    category: "Forum Ẩn Red Pill VN",
    slugCategory: "category-forum-an-red-pill-vn",
  },
  {
    id: 3,
    category: "Giải độc truyền thông bẩn.",
    slugCategory: "category-giai-doc-truyen-thong-ban",
  },
];

const getAllCategory = async (page = 1) => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories?page=${page}`
    );
    return (await get).data;
  } catch (error) {
    return [];
  }
};

const getCategoryById = async (id = 1) => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories/findOneById/${id}`
    );
    return (await get).data;
  } catch (error) {
    return [];
  }
};

const getCategoryBySlug = async (slugCategory) => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories/findOneBySlug/${slugCategory}`
    );
    return (await get).data;
  } catch (error) {
    return [];
  }
};
export { getAllCategory, getCategoryById, getCategoryBySlug };
