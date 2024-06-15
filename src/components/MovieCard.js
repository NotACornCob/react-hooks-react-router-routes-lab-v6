import React from "react";
import {Link} from 'react-router-dom';


function MovieCard({title, time, genres, id}) {
  
  return (
    <>
      <header>
      </header>
      <body>
      <div><h2><Link to={`/movie/${id}`}>{title}</Link></h2></div>
      <div><p><Link to={`/movie/${id}`}>View Info</Link></p></div>
    </body>
    </>
  );
};

export default MovieCard;