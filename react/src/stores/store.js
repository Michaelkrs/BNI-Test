import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";
import { userApi } from "../services/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
