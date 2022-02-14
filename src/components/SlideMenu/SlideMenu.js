import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import "./SlideMenu.css";
import {getMovieDetails} from "../../store/slices/movies.slice";
import {imagePath} from "../../config";

const SlideMenu = ({movie}) => {
    const {
        id,
        backdrop_path,
        original_title,
    } = movie;

    const dispatch = useDispatch();

    const click = () => {
        dispatch(getMovieDetails({id}))
        window.scrollTo(0, 0)
    }

    return (

            <div className={"slideCard"}>
                <NavLink to={"posterPreview"}>
                    <button onClick={click}>

                        <img src={imagePath + backdrop_path}
                             alt={original_title}/>
                        <h3>{original_title}</h3>

                    </button>
                </NavLink>
            </div>

    );
};

export {SlideMenu};