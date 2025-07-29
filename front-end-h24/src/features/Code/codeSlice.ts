import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Code } from "@/types/Code.ts";

export const codeApi = createApi({
  reducerPath: "codeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["code"],
  endpoints: (builder) => ({
    getCode: builder.query<Code[], void>({
      query: () => "code",
      transformResponse: (response: { data: Code[] }) => response.data,
      providesTags: ["code"],
    }),
    addCode: builder.mutation<Code, Partial<Code>>({
      query: (newSnippet) => ({
        url: "code",
        method: "POST",
        body: newSnippet,
      }),
      invalidatesTags: ["code"],
    }),
  }),
});

export const { useGetCodeQuery, useAddCodeMutation } = codeApi;
