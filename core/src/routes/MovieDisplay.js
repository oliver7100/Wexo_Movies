import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import '../App.css'


export default () => {
    const [movie, setMovie] = useState([]); 
    const [loading, setLoading] = useState(true);

    //Parameter call for a single movie fetch.
const { id } = useParams();
const movieAPI = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/${id}?form=json`

useEffect(() => {
    fetch(movieAPI)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovie(data);
        setLoading(false);
    });
  },[]);

  //The img res i wish for when displaying the whole background. 
const imgRes = "orig-1080x1920";
return (
<div>
    
            <div class="banner">
            <div class="banner-content">
            {movie && <h1 class="banner-title">{movie.title}</h1>}  
            <p class="banner-des">{movie.plprogram$longDescription}</p>
            
        </div>
        {loading ?  <div>...loading </div> : <img src={movie.plprogram$thumbnails[imgRes]['plprogram$url']} alt={movie.title}/>}    
        </div>
    </div>
    );
}
