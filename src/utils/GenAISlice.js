import { createSlice } from "@reduxjs/toolkit";

const GenAISlice = createSlice( {
    name:"GenAI",
    initialState: {
        showGenAISearch:false,
        movieNames:null,
        movieResults:null,
        selectedMovie: null,

    },
    reducers: {
        toggleGenAISearchView: (state) => {
            state.showGenAISearch = !state.showGenAISearch;
        },
        addGenAITMDBMovieSuggestions: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames= movieNames;
            state.movieResults= movieResults;
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        clearGenAISuggestions: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    }

    },
});

export const {toggleGenAISearchView, addGenAITMDBMovieSuggestions, setSelectedMovie, clearGenAISuggestions} = GenAISlice.actions;
export default GenAISlice.reducer;