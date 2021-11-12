import React, {useEffect , useState} from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

function App() {
  const [movies, setMovies] = useState([]); 
  const [moviesGenre, setMoviesGenre] = useState({});


  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  },[]);

  let genres = {}
  
  function sortGenres(movie){
    movie["plprogram$tags"].map(tag=>{

      if(!genres.hasOwnProperty(tag['plprogram$title']) )
      {
        genres[tag['plprogram$title']] = []

      }
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
    {movies.map((movie, index) => 
        <Movie key={index} {...movie}/> )}
  </div>
  </>
);
};


export default App;