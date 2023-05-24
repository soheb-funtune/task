import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home.slice.js";

export default configureStore({
  reducer: {
    home: homeReducer,
  },
});
