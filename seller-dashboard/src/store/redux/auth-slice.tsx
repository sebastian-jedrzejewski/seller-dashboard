import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  userId: null,
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userId = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
