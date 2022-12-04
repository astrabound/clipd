import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    dataSourcePath: null,
  },
  reducers: {
    setSettingsKey: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setSettingsKey } = settingsSlice.actions;
