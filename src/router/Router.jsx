import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import Page_404 from "../page/Page_404";
import Home from "../page/Home";
import Blog from "../page/Blog";
import Category from "../page/Category";
import UserLayout from "../UserLayout";
import {
  getAllBlog,
  getBlogByCategoryId,
  getBlogBySlug,
  getRecentBlogs,
  searchBlogByKey,
} from "../json/blogs-all";
import { getAllCategory, getCategoryById } from "../json/categories";
import {
  getCommentByBlogId,
  getRecentComment,
} from "../json/comments-in-blog-id-1";
import { getID } from "../utils/string";
import Search from "../page/Search";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        loader={async () => {
          let categories = await getAllCategory();
          let recentposts = await getRecentBlogs();
          let recentcomment = await getRecentComment();
          return { categories, recentposts, recentcomment };
        }}
        element={<UserLayout />}
        errorElement={<Page_404 />}
      >
        <Route
          index
          loader={async () => {
            let blogs = await getAllBlog({ page: 1 });
            return { blogs };
          }}
          element={<Home />}
        />
        <Route
          path="/category/:categorySlug"
          loader={async ({ params }) => {
            //console.log(params);
            let categorySlug = params.categorySlug;
            let categoryId = getID(categorySlug);
            let category = await getCategoryById(categoryId);
            let blogs = await getBlogByCategoryId({ id: categoryId });
            return { blogs, category };
          }}
          element={<Category />}
        />
        <Route
          loader={async ({ params }) => {
            let blogSlug = params.blogSlug;
            let blog = await getBlogBySlug(blogSlug);
            let blogId = blog.blogsResponseModel.id;
            let comment = await getCommentByBlogId(blogId);
            return { blog, comment };
          }}
          path="/:categorySlug/:blogSlug"
          element={<Blog />}
        />
        <Route
          loader={async ({ params }) => {
            let key = params.key;
            let blogs = await searchBlogByKey({ key: key });
            return {
              blogs: blogs,
              key: key,
            };
          }}
          path="/search/:key"
          element={<Search />}
        />
        <Route
          loader={async ({ params }) => {
            let key = params.key;
            let page = params.page;
            let blogs = await searchBlogByKey({ key: key, page: page });
            return {
              blogs: blogs,
              key: key,
            };
          }}
          path="/search/:key/page/:page"
          element={<Search />}
        />
      </Route>
      <Route
        path="/page/:page"
        loader={async () => {
          let categories = await getAllCategory();
          let recentposts = await getRecentBlogs();
          let recentcomment = await getRecentComment();
          return { categories, recentposts, recentcomment };
        }}
        element={<UserLayout />}
        errorElement={<Page_404 />}
      >
        <Route
          index
          loader={async ({ params }) => {
            let page = params.page;
            if (page < 1) page = 1;
            let blogs = await getAllBlog({ page: page });

            return { blogs };
          }}
          element={<Home />}
        />
      </Route>
    </Route>
  )
);

export default router;
