import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import { categoryApi } from './api/categoryApi'
import { taskApi } from './api/taskApi'

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        [authApi.reducerPath]: authApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(categoryApi.middleware)
        .concat(taskApi.middleware)
})