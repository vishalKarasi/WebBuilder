import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice.ts";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});
