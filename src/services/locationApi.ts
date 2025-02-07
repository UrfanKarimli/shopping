import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = process.env.NEXT_PUBLIC_IPGEOLOCATION_API_KEY;

// API cavabını tip olaraq müəyyən edirik
interface LocationResponse {
    city: string;
    country_name: string;
    ip: string;
}


// RTK Query API
export const locationApi = createApi({
    reducerPath: "locationApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.ipgeolocation.io/" }),
    endpoints: (builder) => ({
        getLocation: builder.query<LocationResponse, string>({
            query: (lang = "en") => `ipgeo?apiKey=${API_KEY}&lang=${lang}`,
        }),
    }),
});

// Custom hook eksport edirik
export const { useGetLocationQuery } = locationApi;
