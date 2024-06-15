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
  console.log(actors)

  return (
    <div>
      <header>
      <div className="navbar">
        <NavBar />
        </div>
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.index}>
            <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
          </article>
        ))}

      
      </main>
    </div>
  );
};

export default Actors;
