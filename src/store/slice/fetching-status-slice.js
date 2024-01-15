import { createSlice } from "@reduxjs/toolkit";

export const fetchingStatusSlice = createSlice({
  name: "fetching",
  initialState: {
    fetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingDone: (state) => {
      state.fetchingDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const { markFetchingDone, markFetchingFinished, markFetchingStarted } =
  fetchingStatusSlice.actions;
