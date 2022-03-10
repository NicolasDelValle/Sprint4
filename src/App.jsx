import React, { useState, useEffect } from "react";
import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import PageNavBarPhone from "./components/bigComponents/navBarPhone";
import MoviePage from "./components/pages/moviePage";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import MoviesCardContainer from "./components/movieCardContainer";
import Api from "./api/api";
function App() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState(" ");
  useEffect(async () => {
    setMovies(await Api.getTopRatedMovies());
    console.log(movies);
  }, []);

  useEffect(async () => {
    if (query.trim() === "") {
      setMovies(await Api.getTopRatedMovies());
    } else {
      setMovies(await Api.getMovieFromSearch(query));
    }
  }, [query]);

  return (
    <div className="App">
      <PageNavBar />

      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="p-0">
              <PageHeader />
              <input
                onChange={(event) => setQuery(event.target.value)}
                type="text"
              />
              {movies && <MoviesCardContainer movies={movies} />}
            </Container>
          }
        />
        <Route path="movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
