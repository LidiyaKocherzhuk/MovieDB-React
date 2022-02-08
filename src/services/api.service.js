import axios from "axios";
import {url} from "../config/urls";

const API_KEY = "07d7c42c5de16f784648b278d6540ea9";


export const apiService = {
    getMovies: ()=> axios.get(url.movies, {
        params: {
            api_key: API_KEY,
            // query: searchKey
        }
    })
}