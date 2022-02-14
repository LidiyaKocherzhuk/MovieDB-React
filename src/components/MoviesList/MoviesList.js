import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addDetails, getMoviesThank} from "../../store/slices/movies.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {getGenresThank} from "../../store/slices/genres.slice";
import {Genre} from "../Genre/Genre";
import "./MoviesList.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const MoviesList = () => {

    const {movies, genreName, error} = useSelector(state => state['moviesReducer']);
    const {genres} = useSelector(state => state["genresReducer"]);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1)

    useEffect(() => {

        dispatch(getMoviesThank({numberPage: page}))
        dispatch(getGenresThank())
    }, [page])

    const btnPrev = () => {

        setPage(page - 1)
        window.scrollTo(0,1220);
        dispatch(addDetails({details: null}))
    }

    const btnNext = () => {

        setPage(page + 1);
        window.scrollTo(0,1220);
        dispatch(addDetails({details: null}))
    }


    return (
        <div className={"moviesList"}>
            {error && <h2>{error}</h2>}

            <div className={"content"}>
                <h2>{genreName}:</h2>

                <div className={"movies"}>

                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

                    <div className={"btnPage"}>
                        <button onClick={btnPrev}> <FaChevronLeft/> Prev</button>
                        <button onClick={btnNext}>Next <FaChevronRight/></button>
                    </div>

                </div>
            </div>

            <div className={"genresAll"}>
                <h2>Genres: </h2>
                {genres.map((genre, index) => <Genre key={genre.id} genre={genre} thisId={index}/>)}
            </div>

        </div>
    );
};

export {MoviesList};