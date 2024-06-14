import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"

function Movie() {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, [])

  console.log(movies)

  return (
    <>
      <header>
        < MovieCard />
      </header>
      <main> 
        {/* Movie info here! */}
      </main>
    </>
  );
};

export default Movie;
