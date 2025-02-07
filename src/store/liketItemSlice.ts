"use client"; // Next.js App Router istifadə edirsinizsə, bu lazımdır.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Liked ad state interfeysi
interface LikedAd {
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

interface LikedAdState {
    likedData: LikedAd[];
}

// Cookies-dən əvvəlki veriləri götürən funksiya
const getStoredLikedData = (): LikedAd[] => {
    if (typeof window === "undefined") return []; // SSR zamanı səhv almamaq üçün
    const storedData = Cookies.get("likedSifarishData");
    return storedData ? JSON.parse(storedData) : [];
};

// İlkin state
const initialState: LikedAdState = {
    likedData: getStoredLikedData(),
};

// Cookies-ə məlumatı yazan funksiya
const saveToCookies = (likedData: LikedAd[]) => {
    Cookies.set("likedSifarishData", JSON.stringify(likedData), { expires: 7 });
};

// Slice yaradılması
const likedAdSlice = createSlice({
    name: "likedAd",
    initialState,
    reducers: {
        toggleLikedAd(state, action: PayloadAction<LikedAd>) {
            const exists = state.likedData.some(ad => ad.id === action.payload.id);
            if (exists) {
                state.likedData = state.likedData.filter(ad => ad.id !== action.payload.id);
            } else {
                state.likedData.push(action.payload);
            }
            saveToCookies(state.likedData);
        },

        // Bütün likedDataları təmizləyən funksiya
        clearLikedAds(state) {
            state.likedData = [];
            Cookies.remove("likedSifarishData");
        }
    }
});

// Export actions
export const { toggleLikedAd, clearLikedAds } = likedAdSlice.actions;

// Export reducer
export default likedAdSlice.reducer;
