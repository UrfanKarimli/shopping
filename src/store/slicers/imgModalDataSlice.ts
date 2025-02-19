import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImgModalState {
    imgModalData: string;
}

const initialState: ImgModalState = {
    imgModalData: ''
};

const imgModalSlice = createSlice({
    name: 'imgModal',
    initialState,
    reducers: {
        setImgModalData: (state, action: PayloadAction<string>) => {
            state.imgModalData = action.payload;
        },
        clearImgModalData: (state) => {
            state.imgModalData = '';
        }
    }
});

export const { setImgModalData, clearImgModalData } = imgModalSlice.actions;
export default imgModalSlice.reducer;
