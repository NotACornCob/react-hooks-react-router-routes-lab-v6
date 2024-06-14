import React from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie({id, title, time, genres}) {
console.log(title)
console.log(id)
  return (
    <>
      <header>
      <div className="navbar">
        <NavBar />
        </div>
      </header>
      <main> 
      < MovieCard id={id} title={title} time={time} genres={genres}/>
      </main>
    </>
  );
};

export default Movie;
