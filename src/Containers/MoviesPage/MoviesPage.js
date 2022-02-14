import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

import "./MoviesPage.css"
import {getGenresThank} from "../../store/slices/genres.slice";
import {getPopularMovies,} from "../../store/slices/movies.slice";
import {MoviesList, SlideMenu} from "../../components";
import {imagePath} from "../../config";

const windowSize = 93;

const MoviesPage = () => {

    const {
        popularsMovies,
        movieDetails,
        error
    } = useSelector(state => state["moviesReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenresThank())
        dispatch(getPopularMovies())
    }, [])

    const [offset, setOffset] = useState(0);

    const clickPrev = () => {
        if (offset === 0) {
            return
        }
        setOffset(offset + windowSize)
    }
    const clickNext = () => {
        if (offset <= -372) {
            return
        }
        setOffset(offset - windowSize)
    }


    return (
        <div className={"my"}>

            {error && <h2>{error}</h2>}

            {!movieDetails ? <div className={"background"}> </div> :
                <div className={"background"} style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),
                 rgba(0, 0, 0, 1)), url(${imagePath}${movieDetails.backdrop_path})`
                }}>></div>}


            <div className={"carouselsMovies"}>
                {!movieDetails ?
                    <img className={"posterImg"}
                        src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/Graphics_web_2021-11-12_dune.jpg?itok=-cw-HDth"
                        alt=""/> :
                    <Outlet/>
                }

                <div className={"carousel"}>
                    <FaChevronLeft onClick={clickPrev} className={"left"}/>
                    <h2>Populars Movies:</h2>

                    <div className={"window carousel"}>

                        {<div className={"tripWithCards"} style={{
                            transform: `translateX(${offset}vw)`,
                        }}>
                            {popularsMovies.map(movie => <SlideMenu key={movie.id} movie={movie}/>)}

                        </div>}
                    </div>

                    <FaChevronRight onClick={clickNext} className={"right"}/>
                </div>

                <MoviesList/>

            </div>
        </div>
    );
};


export {MoviesPage};