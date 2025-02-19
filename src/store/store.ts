// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { sifarishApi } from '@/services/sifarishApi';
import { locationApi } from '@/services/locationApi';
import likedReducer from './slicers/liketItemSlice';
import selectedReducer from './slicers/selectItemSlice'
import localeReducer from "./slicers/localeSlice";
import modalReducer from "./slicers/modalSlice";
import modalProductReducer from './slicers/modalProductSlice'
import imgModalReducer from './slicers/imgModalSlice'

export const store = configureStore({
    reducer: {
        likedItems: likedReducer,
        selectedItems: selectedReducer,
        localeLang: localeReducer,
        modal: modalReducer,
        modalProduct: modalProductReducer,
        imgModal: imgModalReducer,
        [sifarishApi.reducerPath]: sifarishApi.reducer, // RTK Query api reducer
        [locationApi.reducerPath]: locationApi.reducer, // locationApi reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            sifarishApi.middleware, // sifarishApi middleware
            locationApi.middleware // locationApi middleware 
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
