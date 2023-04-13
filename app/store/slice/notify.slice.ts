import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type NotifySlice = {
  status: "available" | "warning" | "error";
  message: string;
  open: boolean;
} | null;

const initialState = null as NotifySlice;

export const notifySlice = createSlice({
  initialState,
  name: "notify-message",
  reducers: {
    setNotifySlice: (state, action: PayloadAction<NotifySlice>) => {
      const notifyState = action.payload;
      return notifyState;
    },
  },
});

export const { setNotifySlice } = notifySlice.actions;
export default notifySlice.reducer;
