import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const other = createApi({
  reducerPath: "other",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://students.netoservices.ru/fe-diplom/",
  }),
  tagTypes: ["Order", "Subscriber"],
  endpoints: (builder) => ({
    addSubscriber: builder.mutation({
      query: (data) => ({
        url: "subscribe",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subscriber"],
    }),
    
    addOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useAddSubscriberMutation, useAddOrderMutation } = other;
