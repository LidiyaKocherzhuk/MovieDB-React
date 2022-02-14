import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {apiService} from "../../services";


const initialState = {
    pages: {},
    movies: [],
    popularsMovies: [],
    movieDetails: null,
    genresMoviesId: [],
    genreName: "All Movies",
    error: null,

};

export const getMoviesThank = createAsyncThunk(
    "moviesSlice/getMoviesThank",

    async ({numberPage, idGenres, value, status}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiService.getMovies(numberPage, idGenres, value)
            dispatch(addMovies({pages: data, movies: data.results}))
            return status
        } catch (e) {
           return rejectWithValue({massage:e.massage})
        }
    }
)

export const getPopularMovies = createAsyncThunk(
    "moviesSlice/getPopularMovies",

    async (_,{rejectWithValue}) => {
        try {
            const {data} = await apiService.getPopularMovies();
            return {data:data.results}
        }
        catch (e) {
            return  rejectWithValue({massage:e.massage})
        }
    }
);

export const getMovieGenres = createAsyncThunk(
    "moviesSlice/getMovieGenres",

    async ({genresMoviesId, name}, {dispatch, rejectWithValue}) => {
        try {

            const {data} = await apiService.getMoviesByGenres(genresMoviesId)
            dispatch(addGenresMoviesId({moviesGenres: data.results, name}))

        } catch (e) {
           return rejectWithValue({massage:e.massage})
        }
    }
);

export const getMovieDetails = createAsyncThunk(
    "moviesSlice/getMovieDetails",

    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiService.getMovieById(id)
            dispatch(addDetails({details: data}))
        } catch (e) {
            return rejectWithValue({massage:e.massage})
        }
    }
)

const moviesSlice = createSlice({

    name: "moviesSlice",

    initialState: initialState,

    reducers: {

        addMovies: (state, action) => {
            state.pages = action.payload.pages
            state.movies = action.payload.movies
        },

        addDetails: (state, action) => {
            state.movieDetails = action.payload.details

        },

        addGenresMoviesId: (state, action) => {
            state.genresMoviesId = action.payload.moviesGenres
            state.genreName = action.payload.name
        },

    },
    extraReducers:{

        [getPopularMovies.fulfilled]:(state,action)=>{
            state.popularsMovies = action.payload.data
        },
        [getMoviesThank.rejected]:(state,action)=>{
            state.error = action.payload.message
},
    [getPopularMovies.rejected]:(state,action)=>{
            state.error = action.payload.message
},
    [getMovieDetails.rejected]:(state,action)=>{
            state.error = action.payload.message
},
    [getMovieGenres.rejected]:(state,action)=>{
            state.error = action.payload.message
},
    }
})

const moviesReducer = moviesSlice.reducer;

export const {
    addMovies,
    addDetails,
    addGenresMoviesId,
} = moviesSlice.actions;

export default moviesReducer;