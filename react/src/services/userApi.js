import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

    addUser: builder.mutation({
      query: (userData) => ({
        url: "/users/add",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Users"],
    }),

    getUserDetail: builder.query({
      query: ({ id }) => `/users/${id}`,
    }),

    editUser: builder.mutation({
      query: ({ userData, id }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["Users"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUserDetailQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApi;
