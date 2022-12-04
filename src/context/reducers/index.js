import { combineReducers } from "@reduxjs/toolkit";
import { clipsSlice } from "./clips";
import { settingsSlice } from "./settings";

const reducerMap = Object.fromEntries(
  [clipsSlice, settingsSlice].map((slice) => [slice.name, slice.reducer])
);

export const rootReducer = combineReducers(reducerMap);
