import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieSelection = params.id
  const movieGenres = [movie.genres]
  console.log(params)

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieSelection}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error))
  }, [movieSelection])
console.log(movie.title)
console.log(movie.genres)

const genreArray = movieGenres.map(genre =>{
  return <span>[{genre}]</span>  })

  return (
    <>
      <header>
      <div className="navbar">
      <NavBar />
        </div>
      </header>
      <main> 
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genreArray}
      </main>
    </>
  );
};  

export default Movie;
