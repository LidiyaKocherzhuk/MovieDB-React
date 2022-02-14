import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import genresReducer from "./slices/genres.slice";

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer
    }
})

export default store
