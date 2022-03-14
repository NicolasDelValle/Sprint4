import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearchModal } from "../actions/commonActions";
import { Modal, Form, Carousel } from "react-bootstrap";
import MoviesCardContainer from "./movieCardContainer";
import Api from "../api/api";
import Rating from "@mui/material/Rating";

function SearchModal() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState("");
  const isModalvisible = useSelector((state) => state.common.showSearchModal);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      setValue(null);
    }
  }, [query]);

  return (
    <Modal
      show={isModalvisible}
      fullscreen={true}
      onHide={() => toggleSearchModal(dispatch)}
    >
      <Modal.Header
        className="d-flex justify-content-between bg-dark text-white"
        style={{
          backgroundImage: "linear-gradient(#0DCAF0, #e81dfd)",
          height: "80px",
        }}
      >
        <Carousel
          className="w-100 h-100 "
          interval={null}
          activeIndex={index}
          indicators={false}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Form.Control
                className="bg-dark text-white w-50 d-flex justify-content-center"
                onChange={(event) => setQuery(event.target.value)}
                size="lg"
                type="text"
                placeholder="Spiderman, Spiderman 2, Spiderman 3, SPIDERMAN!!!"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Rating
                className="fs-1 mb-2 "
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "black" }}>
        {movies && <MoviesCardContainer movies={movies} />}
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
