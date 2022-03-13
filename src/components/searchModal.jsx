import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearchModal } from "../actions/commonActions";
import { Modal, Form } from "react-bootstrap";
import MoviesCardContainer from "./movieCardContainer";
import Api from "../api/api";

function SearchModal() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState("");
  const isModalvisible = useSelector((state) => state.common.showSearchModal);

  const dispatch = useDispatch();
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
    <Modal
      show={isModalvisible}
      fullscreen={true}
      onHide={() => toggleSearchModal(dispatch)}
    >
      <Modal.Header className="d-flex justify-content-between bg-dark text-white">
        <Form.Control
          className="bg-dark text-white"
          onChange={(event) => setQuery(event.target.value)}
          size="lg"
          type="text"
          placeholder="Large text"
        />
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "black" }}>
        {movies && <MoviesCardContainer movies={movies} />}
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
