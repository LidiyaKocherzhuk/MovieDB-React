import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import "./Search.css";
import {getMoviesThank} from "../../store/slices/movies.slice";

const Search = () => {
    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();

    const submit = (value) => {
        dispatch(getMoviesThank({value: value.originalTitle}));
        reset();
    }
    const search = () => {
      window.scrollTo(0, 1400)
    }

    return (
        <div className={"search"}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("originalTitle")}/>
                <button onClick={search}>search...</button>
            </form>
        </div>
    );
};

export {Search};