import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice.ts";
import offerSlice from "./offerSlice.ts";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    offer: offerSlice
  },
});
