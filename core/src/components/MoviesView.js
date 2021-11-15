import React from "react";
import { withRouter } from "react-router-dom";



function MoviesView (props){
    console.warn(props)
    return (
        
        <div><h1>{props.match.params.movieTitle} </h1></div>  
    )

}
    

 
export default withRouter(MoviesView);