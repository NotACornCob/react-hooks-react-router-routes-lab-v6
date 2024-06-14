import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import Movie from "./Movie"
import MovieCard from "../components/MovieCard"

function Home() {

  return (
    <h1>
      <header>
        <div className="navbar">
        <NavBar />
        </div>
      </header>
      <main>
      <h1>Home Page</h1>
      <div>
      < Movie />
      </div>
      </main>
    </h1>
  );
};

export default Home;