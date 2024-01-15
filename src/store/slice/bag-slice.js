import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    deleteFromBag: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    emptyBag: (state) => {
      return (state = []);
    },
  },
});

export const { addToBag, deleteFromBag, emptyBag } = bagSlice.actions;
