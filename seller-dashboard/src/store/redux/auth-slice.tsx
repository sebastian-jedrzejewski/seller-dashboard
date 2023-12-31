import { createSlice } from "@reduxjs/toolkit";

import data from "../../data/data";

interface AuthState {
  userId: string | null;
  chosenStockName: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  userId: null,
  chosenStockName: null,
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userId = action.payload;
      state.chosenStockName = Object.keys(data[action.payload])[0];
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userId = null;
      state.chosenStockName = null;
      state.isAuthenticated = false;
    },
    selectStock: (state, action) => {
      state.chosenStockName = action.payload;
    },
  },
});

export const { login, logout, selectStock } = AuthSlice.actions;
export default AuthSlice.reducer;
