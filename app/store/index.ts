import { showLogin } from "./slice/logins.slice";
import { configureStore } from "@reduxjs/toolkit";
import notifySlice from "./slice/notify.slice";
import { showRegister } from "./slice/register.slice";

const store = configureStore({
  reducer: {

    showRegister:showRegister,
    notifyMessage: notifySlice,
    showLogin: showLogin,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;