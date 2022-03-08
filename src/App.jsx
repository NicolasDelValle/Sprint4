import React, { useState, useEffect } from "react";
import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import PageNavBarPhone from "./components/bigComponents/navBarPhone";
import Api from "./api/api";
function App() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState(" ");
  useEffect(async () => {
    setMovies(await Api.getTopRatedMovies());
  }, []);

  useEffect(async () => {
    if (query.trim() === "") {
      setMovies(await Api.getTopRatedMovies());
    } else {
      setMovies(await Api.getMovieFromSearch(query));
    }
  }, [query]);

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <PageNavBar />
      <PageHeader />
      <input onChange={(event) => setQuery(event.target.value)} type="text" />
      {movies?.data.results.map((movie) => (
        <div key={Math.random()}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <h1>{movie.title}</h1>
        </div>
      ))}
      <PageNavBarPhone />
    </div>
  );
}

export default App;
