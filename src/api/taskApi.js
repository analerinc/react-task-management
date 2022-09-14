
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config'


export const taskApi = createApi({
    reducerPath: 'taskApi',
    tagTypes: ['TASK'],
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
        getTasksForCategory: builder.query({
            query: (categoryId) => `/api/tasks?categoryId=${categoryId}&completed=false`,
            providesTags: ['TASK']
        }),
        createTask: builder.mutation({
            query: (body) => ({
                url: "/api/tasks",
                method: "POST",
                body: body
            }),
            invalidatesTags: ['TASK']
        }),
        completeTask: builder.mutation({
            query: (taskId) => ({
                url: `/api/tasks/${taskId}`,
                method: "PATCH",
                body: {
                    completed: true
                }
            }),
            invalidatesTags: ['TASK']
        }),
    }),
})

export const { useGetTasksForCategoryQuery, useCreateTaskMutation, useCompleteTaskMutation } = taskApi
