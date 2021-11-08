import React from "react";

// desired thumbnail dimensions
const IMG_API = "orig-93x165";
const RATING = 1;

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, plprogram$ratings}) => {
    // try to grab movie thumbnail url. Default to null if desired dimensions is not defined
    const thumbnail = plprogram$thumbnails[IMG_API] 
    ? plprogram$thumbnails[IMG_API]['plprogram$url'] 
    : null;


    return <div className="movie">
        <img src={thumbnail} alt={plprogram$titleLocalized.da}/>
        <div className="movie-info">
            <h3>{plprogram$titleLocalized.da}</h3>
            <span>{entries[18].plprogram$ratings[0]}</span>
        </div>
    </div>;
};

export default Movie;