import baseApi from "../api/baseApiSlice"
import { Book } from "../../types/bookTypes"

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation<void, Book>({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data
            }),
            invalidatesTags: [{ type: 'Book', id: 'LIST' }],
        }),
        getBook: builder.query<Book, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'GET',
            })
        }),
        putBook: builder.mutation<void, {data: Book, id: string}>({
            query: ({data, id}) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: [{ type: 'Book' }]
        }),
        deleteBook: builder.mutation<void, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Book' }],
        })
    }),
})

export const { useAddBookMutation, useGetBookQuery, usePutBookMutation, useDeleteBookMutation } = userApi