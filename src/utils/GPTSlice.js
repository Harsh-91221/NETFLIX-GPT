import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPtSearch: false,
        GPTMovies: null,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPtSearch = !state.showGPtSearch;
        },
        addGPTMoviesResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});
export const { toggleGPTSearchView, addGPTMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;