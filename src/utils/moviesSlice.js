import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        mainMovie: null,
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        setMainMovie: (state, action) => {
            state.mainMovie = action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, 
                addUpcomingMovies, setMainMovie} = moviesSlice.actions;

export default moviesSlice.reducer;