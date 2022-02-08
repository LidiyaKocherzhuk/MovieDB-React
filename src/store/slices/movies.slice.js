import {createSlice} from "@reduxjs/toolkit";




const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState:{
        movies: [],
    },
    reducers:{
        addMovies: (state,action)=>{
            state.movies = action.payload.movies
        }

    }
})

const moviesReducer = moviesSlice.reducer
export const {addMovies} = moviesSlice.actions

export default moviesReducer;