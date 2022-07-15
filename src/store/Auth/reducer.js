import AuthState from "./state";
import { SET_LOGIN_ERROR, SET_USER } from "./types";

export const authReducer = (state = AuthState, options) => {
  switch (options.type) {
    case SET_USER:
      state.users = options.user;
      break;
    case SET_LOGIN_ERROR:
      state.loginError = options.text;
      break;
  }

  return { ...state };
};
