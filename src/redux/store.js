import { createStore  } from "redux";
import blogReducer from "./blog/blogReducer"

const store = createStore(blogReducer);

export default store;