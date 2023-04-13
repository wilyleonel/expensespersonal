import type { LoginType } from "~/components/utils/types.server";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type LoginsSlices = LoginType | null;

const initialState = null as LoginsSlices;

export const loginsSlices = createSlice({
  name: "login-slice",
  initialState,
  reducers: {
    setUpdateLogin: (status, action: PayloadAction<LoginsSlices>) => {
      const login = action.payload;
      return login
    }
  }
});

export const showLoginSlice = createSlice({
  name: "show_login_slice",
  initialState: false,
  reducers: {
    setShowLogin: (state, action: PayloadAction<boolean>) => {
      const login = action.payload;
      return login;
    }
  }
})

export const {setUpdateLogin}=loginsSlices.actions;
export const {setShowLogin}=showLoginSlice.actions;
export const showLogin=showLoginSlice.reducer;
export default loginsSlices.reducer;