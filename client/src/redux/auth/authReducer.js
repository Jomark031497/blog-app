import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  FETCH_LOGGED_IN,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./authTypes";

const loginInitialState = {
  loading: false,
  userInfo: "",
  error: "",
};

export const userLoginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: "",
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        userInfo: "",
        error: action.payload,
      };

    case FETCH_LOGGED_IN:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

const registerInitialState = {
  loading: false,
  userInfo: "",
  error: "",
};

export const userRegisterReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { ...state, loading: true };

    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload, error: "" };

    case CREATE_USER_ERROR:
      return { ...state, loading: false, userInfo: "", error: action.payload };
    default:
      return state;
  }
};
