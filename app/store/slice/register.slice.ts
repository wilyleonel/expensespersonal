import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type showPatientProp = boolean;

export const registerSlice = createSlice({
  name: "new_appointment_slice",
  initialState: false,
  reducers: {
    setShowRegister: (
      state,
      action: PayloadAction<showPatientProp>
    ) => {
      const appoitnment = action.payload;
      return appoitnment;
    },
  },
});

export const showRegisterSlice = createSlice({
  name: "show_service_slice",
  initialState: false,
  reducers: {
    setShowService: (state, action: PayloadAction<boolean>) => {
      const service = action.payload;
      return service;
    },
  },
});

export const { setShowRegister } = registerSlice.actions;
export const showRegister = showRegisterSlice.reducer;
export default registerSlice.reducer;
