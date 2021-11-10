import logo from './logo.svg';
import React, {useEffect , useState} from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

const SEARCH_API = 'https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/106608168011?form=json'

function App() {
  const [movies, setMovies] = useState([]); 
  const [moviesGenre, setMoviesGenre] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  },[]);

  
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    
    fetch(FEATURED_API + searchTerm)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  };

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
  if(Object.keys(moviesGenre).length == 0)
  {
    //movies.map(sortGenres);
    //setMoviesGenre(genres);

  }
  console.log(moviesGenre);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

  }

  return(
    <>
    <header>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Genres</a>
    <div class="dropdown-content">

    </div>
  </li>
      <form onSubmit={handleOnSubmit}>
      <input 
        className="search" 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
      </form>
    </header>
    <div className="movie-container">
      {movies.map((movie, index) => 
          <Movie key={index} {...movie}/> )}
    </div>
    </>
  );
};


export default App;