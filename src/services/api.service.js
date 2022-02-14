import axios from "axios";

import {url} from "../config";

const api_key = "07d7c42c5de16f784648b278d6540ea9";

export const apiService = {

    getMovies: (numberPage, idGenres, query) => axios.get(`${query ? url.search : url.movies}`,
        {
            params: {
                api_key: api_key,
                page: numberPage,
                with_genres: idGenres,
                query: query,
            }
        }),

    getPopularMovies: () => axios.get(url.popular, {
        params: {
            api_key: api_key,
        }
    }),

    getMoviesByGenres: (idGenres) => axios.get(url.movies, {
        params: {
            api_key: api_key,
            with_genres: idGenres,
        }
    }),

    getMovieById: (id) => axios.get(`${url.movie}${id}`, {
        params: {
            api_key: api_key,
        }
    }),

    getGenres: () => axios.get(url.genres, {
        params: {
            api_key: api_key,
        }
    })
};