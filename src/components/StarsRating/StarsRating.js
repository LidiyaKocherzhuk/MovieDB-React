import React, {useState} from "react";

import "./RatingStyles.css";

const StarsRating = ({vote_average}) => {

    const [rating, setRating] = useState(0);
    const [hover,
        setHover] = useState(0);

    return (
        <div className={"stars"}>

            {[...Array(5)].map((star, index) => {

                index += 1;

                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span
                            className={index <= (hover || vote_average / 2) ? "on" : "off"}>&#9733;</span>

                    </button>
                );
            })}
        </div>
    );

};

export {StarsRating};