import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProductsType , ProductType } from '@/types';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const sifarishApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query<GetProductsType, void>({
            query: () => "/products"
        }),
        getProductById: builder.query<ProductType, number>({
            query: (id) => `/products/${id}`
        }),
        updatePost: builder.mutation<GetProductsType, Partial<GetProductsType>>({
            query: (newData) => ({
                url: 'posts',
                method: 'POST',
                body: newData
            })
        })
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useUpdatePostMutation } = sifarishApi;

