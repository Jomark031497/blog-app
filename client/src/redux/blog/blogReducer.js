import {
  FETCH_BLOGS_ERROR,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  GET_BLOG_ERROR,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "./blogTypes";

const fetchBlogsInitialState = {
  loading: false,
  blogs: [],
  error: "",
};

export const fetchBlogsReducer = (state = fetchBlogsInitialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        error: "",
      };

    case FETCH_BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        blogs: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const getBlogInitialState = {
  blog: "",
};

export const getBlogReducer = (state = getBlogInitialState, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: action.payload,
        error: "",
      };

    case GET_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        blog: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
