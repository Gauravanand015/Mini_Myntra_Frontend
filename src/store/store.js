import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./slice/home-slice";
import { fetchingStatusSlice } from "./slice/fetching-status-slice";
import { bagSlice } from "./slice/bag-slice";

const createStore = configureStore({
  reducer: {
    items: homeSlice.reducer,
    fetchingStatus: fetchingStatusSlice.reducer,
    bagItems: bagSlice.reducer,
  },
});

export default createStore;
