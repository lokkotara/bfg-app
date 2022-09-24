import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "../features/Launch/launchSlice";

export const store = configureStore({
  reducer: {
    launch: launchReducer,
  },
});
