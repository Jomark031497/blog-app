import React, { createContext, useReducer, useEffect } from "react";
import { blogReducer } from "./blogReducer";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogs, dispatch] = useReducer(blogReducer, [], () => {
    const localData = localStorage.getItem("blogs");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
        {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
