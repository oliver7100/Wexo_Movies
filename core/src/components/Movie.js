import React from "react";
import {
  Link,
} from "react-router-dom";
import '../App.css';



// desired thumbnail dimensions
const IMG_API = "orig-720x1280"


//Creating search parameters for the index.

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, title, id, plprogram$ratings}) => {
    // try to grab movie thumbnail url. Default to null if desired dimensions is not defined

      //This is a normal "if statement", but for more readable purposes I made an if statement for a better example. 
    const thumbnail = plprogram$thumbnails[IMG_API] 
    ? plprogram$thumbnails[IMG_API]['plprogram$url'] 
    : null;

    const movieRatings = plprogram$ratings.length > 0
    ?  plprogram$ratings[0]['plprogram$rating'] : "No rating yet" ;
    
    const movieDescription = description
    ? description : "This Movie doesn't contain any description yet."; 
    
    let movieTitle = title;
    if (plprogram$titleLocalized.da)
    {
        movieTitle = plprogram$titleLocalized.da
    }


    //Vote class for styling purposes, and user interface. 
    const setVoteClass = (vote) => {
      if(vote >= 8){
        return "green";
      } else if (vote >= 6){
        return "orange";
      } else{
        return "red";
      }
    }


    const myArray = id.split("/");

    const idSplitLenght = (myArray[myArray.length -1]); 

    //Also the overall HTML styling is written down here with the images display and descripton. 

    //Also replacing the thumbnail with an image that displays when. The API's movielist
    //Doesnt contain the right dimension I wish for. As a thumbnail.
    return <div className="movie">
      
      <Link to={`/MovieDisplay/${idSplitLenght}`}>
      

      <img src={thumbnail ? thumbnail : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80'}alt={movieTitle}/>
      </Link>

        <div className="movie-info">
          <h3>{movieTitle}  </h3>
          <span className={`tag ${setVoteClass(movieRatings)}`}>
            {movieRatings}</span>
        </div>

      <div className="movie-over">
      <Link to={`/MovieDisplay/${idSplitLenght}`}>

        <h2>Description</h2>
        </Link>
        <p>{movieDescription}</p>


      </div>
    </div>
};

export default Movie;