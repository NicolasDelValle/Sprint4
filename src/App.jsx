import React, { useState, useEffect } from "react";
import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import PageNavBarPhone from "./components/bigComponents/navBarPhone";
import MoviePage from "./components/pages/moviePage";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Modal } from "react-bootstrap";
import MoviesCardContainer from "./components/movieCardContainer";
import Api from "./api/api";
function App() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState(" ");
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  //llamada, inicial cuando el
  useEffect(async () => {
    setMovies(await Api.getTopRatedMovies());
  }, []);
  //query
  useEffect(async () => {
    if (query.trim() === "") {
      setMovies(await Api.getTopRatedMovies());
    } else {
      setMovies(await Api.getMovieFromSearch(query));
    }
  }, [query]);

  return (
    <div className="App">
      <PageNavBar handleShow={handleShow} />
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="">
            Modal
            <input
              onChange={(event) => setQuery(event.target.value)}
              type="text"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {movies && <MoviesCardContainer movies={movies} />}
        </Modal.Body>
      </Modal>

      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="p-0 ">
              <PageHeader />
              <div className="mt-5 mb-5"></div>
            </Container>
          }
        />
        <Route path="movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
