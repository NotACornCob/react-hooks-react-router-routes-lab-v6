import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  console.log(params)

  useEffect(() =>{
    fetch(`http://localhost:4000/movies`)
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, [])

  const movieList = movies.map(movie =>{
    return < MovieCard key={movie.id} id={movie.id} title={movie.title} genres={movie.genres} time={movie.time} />
  })

  return (
    <>
      <header>
      <div className="navbar">
      <NavBar />
        </div>
      </header>
      <main> 
      {movieList}
      </main>
    </>
  );
};  

export default Movie;
