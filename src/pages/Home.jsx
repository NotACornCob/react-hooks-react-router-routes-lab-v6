import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"


function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
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
      <h1>Home Page</h1>
     {movieList}
      </main>
      </>
  );
};

export default Home;