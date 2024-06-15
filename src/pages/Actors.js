import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
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
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
          <ul key={index}>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
          </article>
        ))}

      
      </main>
    </div>
  );
};

export default Actors;
