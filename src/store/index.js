import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { FruitsApi } from "./api/fruitsApi";

export const store = configureStore({
  reducer: {
    [FruitsApi.reducerPath]: FruitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(FruitsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchFruitsQuery, useSubmitMutation } from "./api/fruitsApi";
