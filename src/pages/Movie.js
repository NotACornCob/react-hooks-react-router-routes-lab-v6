import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieSelection = params.id;
  
  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieSelection}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error))
  }, [movieSelection]) 
  
  return (
    <>
      <header>
      <div className="navbar">
      <NavBar />
        </div>
      </header>
      <main> 
        <h1>{movie.title}</h1>
        <p>Length: {movie.time} minutes</p>
        <h3>Genres:</h3>{movie.genres && movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>))}
      </main>
    </>
  );
};  

export default Movie;
