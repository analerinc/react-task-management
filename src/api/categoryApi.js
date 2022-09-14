
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config'


export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ["CATEGORY"],
    baseQuery: fetchBaseQuery({
        baseUrl: config.BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/api/categories`,
            providesTags: ['CATEGORY']
        }),
        createCategory: builder.mutation({
            query: (body) => ({
                url: "/api/categories",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["CATEGORY"]
        }),
    }),
})

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi
