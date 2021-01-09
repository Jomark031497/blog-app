import * as uuid from "uuid";

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: uuid.v4(),
          title: action.blog.title,
          author: action.blog.author,
          content: action.blog.content,
        },
      ];

    default:
      return state;
  }
};
