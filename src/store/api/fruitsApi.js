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
      submit: builder.mutation({
        query: (values) => {
          return {
            url: "/products/",
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: values,
          };
        },
      }),
    };
  },
});
export const { useFetchFruitsQuery, useSubmitMutation } = FruitsApi;

export { FruitsApi };
