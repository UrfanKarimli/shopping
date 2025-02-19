import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean[];
}

const initialState: ModalState = {
    isOpen: [false, false],
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<{ idx: number; target: boolean }>) => {
            state.isOpen[action.payload.idx] = action.payload.target;
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
