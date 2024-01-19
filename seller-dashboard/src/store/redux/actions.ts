import { ThunkAction } from "redux-thunk";
import { UnknownAction } from "@reduxjs/toolkit";

import { login, logout } from "./auth-slice";
import { RootState } from "./store";

export const loginUser =
  (userId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
  (dispatch) => {
    localStorage.setItem("userId", userId);
    dispatch(login(userId));
  };

export const logoutUser =
  (): ThunkAction<void, RootState, unknown, UnknownAction> => (dispatch) => {
    localStorage.removeItem("userId");
    dispatch(logout());
  };

export const autoLogin =
  (): ThunkAction<void, RootState, unknown, UnknownAction> => (dispatch) => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(login(userId));
    }
  };
