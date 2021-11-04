import logo from './logo.svg';
import React, {useEffect , useState} from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

const IMG_API = ""

const SEARCH_API = "curl --location --request GET 'https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/106608168011?form=json'"

function App() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  },[])

  
  return <div> 
    {movies.length > 0 && 
      movies.map((movie) => (
    <Movie key={movie.entries} {...movie}/>
    ))}
    </div>
}

export default App;
