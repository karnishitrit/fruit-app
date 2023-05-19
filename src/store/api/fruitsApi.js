import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FruitsApi = createApi({
  reducerPath: "Fruits",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://front-end-exam-dot-winky-apis.ew.r.appspot.com/",
  }),
  endpoints(builder) {
    return {
      fetchFruits: builder.query({
        query: (fruitId) => {
          return {
            url: `/products/${fruitId}`,
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchFruitsQuery } = FruitsApi;

export { FruitsApi };
