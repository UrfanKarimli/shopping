
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean[];
}

const initialState: ModalState = {
    isOpen: [false, false],
};

const imgModalSlice = createSlice({
    name: "img-modal",
    initialState,
    reducers: {
        toggleImgModal: (state, action: PayloadAction<{ idx: number; target: boolean }>) => {
            state.isOpen[action.payload.idx] = action.payload.target;
        },
    },
});

export const { toggleImgModal } = imgModalSlice.actions;
export default imgModalSlice.reducer;
