import {useSelector} from "react-redux";
import {useState} from "react";

import "./PosterPreview.css";
import {MovieInfo, StarsRating} from "../index";
import {imagePath} from "../../config";

const PosterPreview = () => {

    const {movieDetails, error} = useSelector(state => state["moviesReducer"]);
    const {
        genres,
        original_title,
        vote_average,
        release_date
    } = movieDetails;

    const [status, setStatus] = useState(false);

    const clickDetail = () => {
        setStatus(true)
    }

    return (
        <div>
            {error && <h2>{error}</h2>}

            {movieDetails &&
            <div className="poster"
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), 
                 url(${imagePath}${movieDetails.backdrop_path})`
                 }}>

                <button onClick={clickDetail} className={"btnPoster"}>Detail Info</button>

                {status && <div className={"blockInfo"}
                                style={{
                                    top: "20px",
                                }}>
                    <MovieInfo setStatus={setStatus}/>
                </div>}

                <div className={"description"}>

                    <h1>{original_title}</h1>
                    <StarsRating vote_average={vote_average}/>
                    <h3>release date: {release_date}</h3>
                    <h3>genres: {genres.map(genre => <span
                        key={genre.id}> {genre.name},</span>)}</h3>

                </div>

            </div>}
        </div>
    );
};

export {PosterPreview};