import { combineReducers } from "redux";
import { fetchBlogsReducer, getBlogReducer } from "./blog/blogReducer";
import { userLoginReducer, userRegisterReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  fetchBlogs: fetchBlogsReducer,
  getBlog: getBlogReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
