import React from "react";
import NavBar from "../components/NavBar"
import Movie from "./Movie"

function Home() {


  return (
    <h1>
      <header>
        <h1> 
          Home Page
        </h1>
        <div className="navbar">
        < NavBar />
        </div>
      </header>
      <main>
        <div className="MovieCard">
      < Movie />
        </div>
      </main>
    </h1>
  );
};

export default Home;