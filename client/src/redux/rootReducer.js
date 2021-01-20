import { combineReducers } from "redux";
import {
  createBlogReducer,
  fetchBlogsReducer,
  getBlogReducer,
  upvoteReducer,
} from "./blog/blogReducer";
import { userLoginReducer, userRegisterReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  fetchBlogs: fetchBlogsReducer,
  getBlog: getBlogReducer,
  createBlog: createBlogReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  blogUpvote: upvoteReducer,
});

export default rootReducer;
