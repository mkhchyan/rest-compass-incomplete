import { SET_LOGIN_ERROR, SET_USER } from "./types";

export function setUser(user) {
    return {
      type: SET_USER,
      user,
    };
  }
  export function setLoginError(text) {
    return {
      type: SET_LOGIN_ERROR,
      text,
    };
  }