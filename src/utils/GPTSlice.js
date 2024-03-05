import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPtSearch: false,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPtSearch = !state.showGPtSearch;
        },
    },
});
export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;