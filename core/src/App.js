import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import './App.css'

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

function App() {
  const [movies, setMovies] = useState([]); 
  const [moviesGenre, setMoviesGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');


//We're feitching the data from the API, and using console.log to check the API's information we get  
//in the console
  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
        setLoading(false);
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

  console.log(moviesGenre);

  if(Object.keys(moviesGenre).length ==  0)
  {

    console.log(genres)
    movies.map(sortGenres);

  };
  
  const handleOnSubmit = (e) => {
    e.preventDeafult();


  };

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);

    const movieAPI = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/${searchTerm}?form=json`

    fetch(movieAPI)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
    });
  

  }

  return( 
  <>
  <header class="appheader">
    <from onSubmit={handleOnSubmit}>
    <input
    className="search"
    type="search"
    placeholder="Search..."
    value={searchTerm}
    onChange={handleOnChange}
    />
    </from>
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