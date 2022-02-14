import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import "./MoviesListCard.css";
import {getMovieDetails} from "../../store/slices/movies.slice";
import {imagePath} from "../../config";

const MoviesListCard = ({movie}) => {
    const {
        backdrop_path,
        id,
        original_title,
        vote_average
    } = movie;

    let dispatch = useDispatch();

    const click = () => {
        dispatch(getMovieDetails({id}))
        window.scrollTo(0,30)
    }

    return (

        <div className={"card"}>

            <NavLink to={"posterPreview"}>
                <button onClick={click}>

                    <img src={imagePath + backdrop_path} alt={original_title}/>

                    <div>
                        <div className={"stars"}>
                            {[...Array(5)].map((star, index) => {
                                index += 1
                                return (
                                    <span key={index}
                                          className={index <= vote_average / 2 ? "on" : "off"}>&#9733;</span>
                                );
                            })}
                        </div>

                        <h3 className={"original_title"}>{original_title}</h3>

                    </div>
                </button>
            </NavLink>
        </div>
    );
};


export {MoviesListCard};

