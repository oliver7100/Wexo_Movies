import React from "react";
import MoviesView from "./MoviesView";
import Image from "../images/imagereplacer.jpg"
import {
  Link,
} from "react-router-dom";




// desired thumbnail dimensions
const IMG_API = "orig-1080x1920";

//Replace thumbnail with an image that displays, "This movie doesnt have any thumbnail". Duo to the API's movielist
//Doesnt contain the right dimension I wish for. As a thumbnail.
if(IMG_API == null)
{
  <img src={Image} alt="No image"/> 
}

//Creating search parameters for the index.

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, title, guid, plprogram$ratings}) => {
    // try to grab movie thumbnail url. Default to null if desired dimensions is not defined

      //This is a normal "if statement", but for more readable purposes I made an if statement for a better example. 
    const thumbnail = plprogram$thumbnails[IMG_API] 
    ? plprogram$thumbnails[IMG_API]['plprogram$url'] 
    : null;

    const movieRatings = plprogram$ratings.length > 0
    ?  plprogram$ratings[0]['plprogram$rating'] : "This Movie hasn't been rated yet." ;
    
    const movieDescription = description
    ? description : "This Movie doesn't contain any description yet."; 
    
    
    let movieTitle = title;
    if (plprogram$titleLocalized.da)
    {
        movieTitle = plprogram$titleLocalized.da
    }

  

    //Also the overall HTML styling is written down here with the images display and descripton. 
    return <div className="movie">
      
      <Link to={`/MovieDisplay/${movieTitle}`}>

      <img src={thumbnail} alt={movieTitle}/> 
      </Link>

        <div className="movie-info">
          <h3>
              <h3>{movieTitle}  </h3>
          </h3>
          <p>{movieRatings}</p>
        </div>

      <div className="movie-over">
      <Link to={`/MovieDisplay/${movieTitle}`}>

        <h2>Description</h2>
        </Link>
        <p>{movieDescription}</p>

      </div>
    </div>
};

export default Movie;