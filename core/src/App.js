import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from './components/Movie';
import {Link} from "react-router-dom";

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

function App() {
  const [movies, setMovies] = useState([]); 
  const [moviesGenre, setMoviesGenre] = useState({});

//We're feitching the data from the API, and using console.log to check the API's information we get  
//in the console
  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  },[]);

  



  //Here we are storing our genres properties
  let genres = {}
  
  function sortGenres(movie){
    movie["plprogram$tags"].map(tag=>{
  //We are checking if the genre doesnt contain the title property
      if(!genres.hasOwnProperty(tag['plprogram$title']) )
      {
        //Here we are instanciating a new object if it doesnt contain
        genres[tag['plprogram$title']] = []

      }
      //afterwards we push it to the new created object, so we dont lose any movies on the way
      genres[tag['plprogram$title']].push(movie);

    })
  }
  if(Object.keys(moviesGenre).length ==  0)
  {

    console.log(genres)
    movies.map(sortGenres);

  }
  console.log(moviesGenre);

  return( 
  <>
  <header>
   </header>
  <div className="movie-container">
    {
    movies.map((movie, index) => 
   
    <Movie key={index} {...movie}/> )
        
    }
  </div>
  </>
);
};


export default App;