import {
  FETCH_BLOGS_ERROR,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  GET_BLOG_ERROR,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "./blogTypes";
import axios from "axios";

/**
 *
 * FETCH BLOGS FROM DB
 *
 */
export const fetchBlogsRequest = () => {
  return {
    type: FETCH_BLOGS_REQUEST,
  };
};

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs,
  };
};

export const fetchBlogsError = (error) => {
  return {
    type: FETCH_BLOGS_ERROR,
    payload: error,
  };
};

export const fetchBlogs = () => {
  return async (dispatch) => {
    dispatch(fetchBlogsRequest);
    try {
      const res = await axios.get("/blogs", {
        headers: { "Content-Type": "application/json" },
      });
      const blogs = res.data;
      dispatch(fetchBlogsSuccess(blogs));
    } catch (err) {
      const error = err.message;
      dispatch(fetchBlogsError(error));
    }
  };
};

/**
 *
 * FETCH A SINGLE BLOG FROM DB
 *
 */

export const getBlogRequest = () => {
  return {
    type: GET_BLOG_REQUEST,
  };
};

export const getBlogSuccess = (blog) => {
  return {
    type: GET_BLOG_SUCCESS,
    payload: blog,
  };
};

export const getBlogError = (error) => {
  return {
    type: GET_BLOG_ERROR,
    payload: error,
  };
};

export const getBlog = (id) => {
  return async (dispatch) => {
    dispatch(getBlogRequest);

    try {
      const res = await axios.get(`/blogs/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      dispatch(getBlogSuccess(data));
    } catch (err) {
      dispatch(getBlogError(err));
    }
  };
};
