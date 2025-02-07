import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export const sifarishApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products"
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/products/${id}`
        }),
        updatePost: builder.mutation<Product, Partial<Product>>({
            query: (newData) => ({
                url: 'posts',
                method: 'POST',
                body: newData
            })
        })
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useUpdatePostMutation } = sifarishApi;
