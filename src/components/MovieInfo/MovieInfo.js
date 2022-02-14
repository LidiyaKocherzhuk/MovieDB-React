import {useSelector} from "react-redux";

import "./MovieInfo.css";
import {StarsRating} from "../StarsRating/StarsRating";
import {imagePath} from "../../config";

const MovieInfo = ({setStatus}) => {

    const {movieDetails, error} = useSelector(state => state["moviesReducer"]);

    const {
        genres,
        original_language,
        original_title,
        overview,
        vote_average,
        poster_path,
        production_companies,
        release_date,
        spoken_languages,
        status,
    } = movieDetails;

    const clickClose = () => {
        setStatus(false)
    }

    return (
        <>
            {error && <h2>{error}</h2>}

            <img src={imagePath + poster_path} alt={original_title}/>

            <div className={"info"}>

                <StarsRating vote_average={vote_average}/>
                <h1>{original_title}</h1>
                <h3>genres: {genres.map(genre => <span key={genre.id}> {genre.name}, </span>)}</h3>
                <h3>release: {release_date}</h3>
                <h3>overview: <br/>{overview} <hr/></h3>

                <button onClick={clickClose} className={"btnClose"}>Close</button>
                <div className={"infoBottom"}>

                    <h3>language original: <span>{original_language}</span>;</h3>
                    <h3>language spoken: {spoken_languages && spoken_languages.map(langueges =>
                        <span>{langueges.name}, </span>)}
                    </h3>
                    <h3>companies: <br/>{production_companies.map(companies =>
                        <>name: <span>{companies.name},<br/></span></>)}
                    </h3>
                    <h3>status: <span>{status}</span>;</h3></div>

            </div>

        </>

    );
};

export {MovieInfo};

