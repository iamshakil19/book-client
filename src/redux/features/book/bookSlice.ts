/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateBookMutation } = bookApi;