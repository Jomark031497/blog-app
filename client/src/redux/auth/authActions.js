import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "./authTypes";

/**
 *
 * FETCH USER
 *
 */
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

export const fetchUser = (user) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest);

    try {
      const res = await axios.post("/users/login", user);
      const data = res.data;
      dispatch(fetchUserSuccess(data));
    } catch (err) {
      dispatch(fetchUserError(err));
    }
  };
};

/**
 *
 * CREATE USER
 *
 * */
export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUserError = (error) => {
  return {
    type: CREATE_USER_ERROR,
    payload: error,
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    dispatch(createUserRequest);

    try {
      const res = await axios.post("/users/register", user, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
      dispatch(createUserSuccess(data));
    } catch (err) {
      dispatch(createUserError(err));
    }
  };
};
