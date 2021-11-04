import React from "react";


const IMG_API = "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/706/516/series_1256_po-w-superlow_orig.jpg"

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, plprogram$ratings}) =>  
    <div className="movie">
        <img src={IMG_API + plprogram$thumbnails} alt={plprogram$titleLocalized}/>

    </div>;

    export default Movie;
