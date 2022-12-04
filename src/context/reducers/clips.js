import { createSlice } from "@reduxjs/toolkit";

export const clipsSlice = createSlice({
  name: "clips",
  initialState: [],
  reducers: {
    loadClips: (state, action) => {
      state = action.payload;
      return state;
    },
    addClip: (state) => {
      state.append(`New clip ${state.length}`);
    },
  },
});

export const { loadClips, addClip } = clipsSlice.actions;
