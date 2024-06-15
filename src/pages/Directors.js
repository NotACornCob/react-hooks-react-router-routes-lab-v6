import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Directors() {

  const [directors, setDirectors] = useState([]);

useEffect(() =>{
  fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
}, [])

  return (
    <div>
      <header>
      <div className="navbar">
        <NavBar />
        </div>
      </header>
      <main>
      <h1>Directors Page</h1>
        {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul key={index}>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
            </ul>
        </article>))}
        <p></p>
      </main>
    </div>
  );
};

export default Directors;
