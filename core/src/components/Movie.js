import React from "react";


const IMG_API = "orig-93x165"

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, plprogram$ratings, entries, plprogram$url}) =>  
    <div className="movie">
        <img src={plprogram$url} alt={plprogram$titleLocalized}/>
    </div>;

    export default Movie;
   