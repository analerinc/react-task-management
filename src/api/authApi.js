import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: "/api/auth/register",
                method: "POST",
                body: body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/api/auth/authenticate",
                method: "POST",
                body: body
            })
        })
    }),
})

export const { useRegisterMutation, useLoginMutation } = authApi
