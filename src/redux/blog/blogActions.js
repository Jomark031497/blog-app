import { ADD_BLOG } from "./blogTypes";

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};
