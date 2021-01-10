import { ADD_BLOG } from "./blogTypes";
import * as uuid from "uuid";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          {
            id: uuid.v4(),
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
          },
        ],
      };
    default:
      return state;
  }
};

export default blogReducer;
