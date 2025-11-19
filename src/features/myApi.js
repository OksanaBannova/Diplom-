import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://students.netoservices.ru/fe-diplom/",
  }),
  tagTypes: ["dataSearchCityes", "dataSearchTrains", "LastTickets"],
  endpoints: (builder) => ({
    getCityesName: builder.query({
      query: (name) => `routes/cities?name=${name}`,
      providesTags: (result, error, name) => [
        { type: "dataSearchCityes", id: name },
      ],
    }),
    
    getTrainsList: builder.query({
      query: (arg) => {
        console.log(arg, "trainParams");

        const requestObj = {
          ...arg.search,
          ...arg.formData,
          ...arg.parameters,
          ...arg.filter,
        };
        
        console.log(requestObj, 'requestObj');
        
        for (let key in requestObj) {
          if (requestObj[key] === false) requestObj[key] = undefined;
        }

        const params = queryString.stringify(requestObj, {
          skipNull: true,
          skipEmptyString: true,
        });

        return `routes?${params}`;
      },
      providesTags: (result, error, arg) => [
        { type: "dataSearchTrains", id: JSON.stringify(arg) },
      ],
    }),
    
    getTrainId: builder.query({
      query: (id) => `routes/${id}/seats`,
    }),
    
    getLastTickets: builder.query({
      query: () => "routes/last",
      providesTags: ["LastTickets"],
    }),
  }),
});

export const {
  useGetCityesNameQuery,
  useGetTrainsListQuery,
  useGetTrainIdQuery,
  useGetLastTicketsQuery,
} = api;
