
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1/",
    // prepareHeaders: async (headers, { getState, endpoint }) => {
    //   const token = getState()?.auth?.accessToken;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  });



  export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: () => ({}),
  });