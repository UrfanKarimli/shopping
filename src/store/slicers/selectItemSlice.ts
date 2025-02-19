"use client"; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { ProductType } from '@/types';

interface SelectedItemState {
    selectedData: ProductType[];
}

// Cookies-dən əvvəlki seçilmiş veriləri götürən funksiya
const getStoredSelectedData = (): ProductType[] => {
    if (typeof window === "undefined") return []; // SSR zamanı səhv almamaq üçün
    const storedData = Cookies.get("selectedSifarishData");
    return storedData ? JSON.parse(storedData) : [];
};

// İlkin state
const initialState: SelectedItemState = {
    selectedData: getStoredSelectedData(),
};

// Cookies-ə məlumatı yazan funksiya
const saveToCookies = (selectedData: ProductType[]) => {
    Cookies.set("selectedSifarishData", JSON.stringify(selectedData), { expires: 7 });
};

// Slice yaradılması
const selectItemSlice = createSlice({
    name: "selectedItem",
    initialState,
    reducers: {
        // Məhsulu səbətə əlavə və ya sayını artırma
        addToCart(state, action: PayloadAction<ProductType>) {
            const existingItem = state.selectedData.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem?.quantity !== undefined) {
                existingItem.quantity += 1;
            } else {
                state.selectedData.push({ ...action.payload, quantity: 1 });
            }

            saveToCookies(state.selectedData);
        },

        // Məhsulun sayını azaltmaq
        decreaseQuantity(state, action: PayloadAction<number>) {
            const existingItem = state.selectedData.find(
                (item) => item.id === action.payload
            );

            if (existingItem?.quantity !== undefined) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.selectedData = state.selectedData.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }

            saveToCookies(state.selectedData);
        },

        
        // Məhsulu tamamilə səbətdən çıxarmaq
        removeFromCart(state, action: PayloadAction<number>) {
            state.selectedData = state.selectedData.filter(
                (item) => item.id !== action.payload
            );

            saveToCookies(state.selectedData);
        },

        // Bütün seçilmiş itemləri təmizləmək
        clearCart(state) {
            state.selectedData = [];
            Cookies.remove("selectedSifarishData");
        },
    },
});

// Export actions
export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
    selectItemSlice.actions;

// Export reducer
export default selectItemSlice.reducer;
