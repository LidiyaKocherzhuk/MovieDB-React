export const baseURL = "https://api.themoviedb.org/3/";
export const imagePath = "https://image.tmdb.org/t/p/w1280";

const movie = "movie/"

export const url = {
    movie: baseURL + movie,
    movies: baseURL  + "discover/" + movie,
    popular: baseURL + "movie/popular",
    search: baseURL + "search/movie",
    genres: baseURL + "genre/movie/list"
}