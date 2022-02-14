import React from "react";
import {useDispatch} from "react-redux";

import "./Genre.css";
import {getMovieGenres, getMoviesThank} from "../../store/slices/movies.slice";

const Genre = ({genre:{id,name}}) => {
    const dispatch = useDispatch();

    return (
        <div className={"genre"}>
                <button onClick={() => {
                    dispatch(getMoviesThank({idGenres: id}))
                    dispatch(getMovieGenres({fantasyMovies:id, name}))
                    window.scrollTo(0,1400)
                }}>{name}</button>
        </div>
    );
};

export {Genre};