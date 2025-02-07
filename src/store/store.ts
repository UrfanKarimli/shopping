// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { sifarishApi } from '@/services/sifarishApi';
import { locationApi } from '@/services/locationApi';
import likedReducer from './liketItemSlice';
import  selectedReducer from './selectItemSlice'
import localeReducer from "./localeSlice";

export const store = configureStore({
    reducer: {
        likedItems: likedReducer,
        selectedItems: selectedReducer ,
        localeLang: localeReducer,
        [sifarishApi.reducerPath]: sifarishApi.reducer, // RTK Query api reducer
        [locationApi.reducerPath]: locationApi.reducer, // locationApi reducer əlavə edirik
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            sifarishApi.middleware, // sifarishApi middleware
            locationApi.middleware // locationApi middleware əlavə edirik
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
