import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../../data.js";

export const homeSlice = createSlice({
  name: "home",
  initialState: [],
  reducers: {
    showInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { showInitialItems } = homeSlice.actions;
