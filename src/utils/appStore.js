import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import GenAIReducer from "./GenAISlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        GenAI: GenAIReducer
    },
});

export default appStore;