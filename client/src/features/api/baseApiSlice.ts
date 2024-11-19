import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../types/bookTypes';

console.log(import.meta.env.VITE_BASE_URL);

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL
});

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => ({
                url: '/books',
                method: 'GET',
            }),
            providesTags: ['Book'],
        }),
    }),
});

export const { useGetBooksQuery } = baseApi;

export default baseApi;