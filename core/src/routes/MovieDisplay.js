import React from "react";
import { useParams } from "react-router-dom";

const MovieDisplay = () => {
const { movieTitle } = useParams();


return (
<div>
    <h1>
    { movieTitle }
    </h1>

    
</div>
    );
}





    

 
export default MovieDisplay;