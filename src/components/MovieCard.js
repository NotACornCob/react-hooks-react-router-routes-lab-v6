import React from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


function MovieCard({title, time, genres, id}) {
  
  return (
    <article>
        <h3><Link to={`/Movie/${id}`}>{title}</Link></h3>
    </article>
  );
};

export default MovieCard;