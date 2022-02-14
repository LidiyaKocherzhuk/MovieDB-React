import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {apiService} from "../../services/api.service";

export const getGenresThank = createAsyncThunk(
    "genresSlice/getGenresThank",

    async (_,{dispatch}) => {
        try {
            const {data} = await apiService.getGenres()
            dispatch(addGenres({genres:data.genres}))
        }
        catch (e) {

        }
    }
);

const genresSlice = createSlice({
    name:"genresSlice",
    initialState:{
        genres:[]
    },
    reducers:{
        addGenres: (state,action) => {
            state.genres = action.payload.genres
        }
    }
})

const genresReducer = genresSlice.reducer;

export const {addGenres} = genresSlice.actions;
export default genresReducer;