import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  mode: "light" | "dark";
  theme: string;
  popup: boolean;
  menu: boolean;
}

type UiAction = "popup" | "menu";

export const getInitialMode = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialState: InitialState = {
  mode: getInitialMode(),
  theme: "crimson",
  popup: false,
  menu: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      document.documentElement.style.colorScheme = state.mode;
      document.body.className = state.mode;
    },

    setTheme(state, action) {
      state.theme = action.payload;
      document.documentElement.style.setProperty("--clr-primary", state.theme);
    },

   toggle(state, action: PayloadAction<UiAction>) {
      const payload = action.payload;
        state[payload] = !state[payload];
    },
  },
});

export const { toggleMode, setTheme, toggle } =
  uiSlice.actions;
export default uiSlice.reducer;
