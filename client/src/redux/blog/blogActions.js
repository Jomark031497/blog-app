import {
  CREATE_BLOG_ERROR,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  FETCH_BLOGS_ERROR,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  GET_BLOG_ERROR,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  UPVOTE_BLOG_ERROR,
  UPVOTE_BLOG_REQUEST,
  UPVOTE_BLOG_SUCCESS,
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
      dispatch(getBlogError(err.response.data.msg));
    }
  };
};

/**
 * CREATE A BLOG
 */
export const createBlogRequest = () => {
  return {
    type: CREATE_BLOG_REQUEST,
  };
};

export const createBlogSuccess = (blog) => {
  return {
    type: CREATE_BLOG_SUCCESS,
    payload: blog,
  };
};

export const createBlogError = (error) => {
  return {
    type: CREATE_BLOG_ERROR,
    payload: error,
  };
};

export const createBlog = (blog) => {
  return async (dispatch) => {
    dispatch(createBlogRequest);

    try {
      const res = await axios.post("blogs/create", blog, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      dispatch(createBlogSuccess(data));
    } catch (err) {
      dispatch(createBlogError(err.response.data.msg));
    }
  };
};

/**
 *
 * Upvote a blog
 *
 */

export const upvoteBlogRequest = () => {
  return {
    type: UPVOTE_BLOG_REQUEST,
  };
};

export const upvoteBlogSuccess = (success) => {
  return {
    type: UPVOTE_BLOG_SUCCESS,
    payload: success,
  };
};

export const upvoteBlogError = (error) => {
  return {
    type: UPVOTE_BLOG_ERROR,
    payload: error,
  };
};

export const upvoteBlog = (id) => {
  return async (dispatch) => {
    dispatch(upvoteBlogRequest);
    try {
      const res = await axios.put(
        "blogs/upvote",
        { id: id },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch(upvoteBlogSuccess(res.data));
    } catch (err) {
      dispatch(upvoteBlogError(err.response.data.message));
    }
  };
};
