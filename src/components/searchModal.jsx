import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearchModal } from "../actions/commonActions";
import { Modal, Form, Carousel } from "react-bootstrap";
import MoviesCardContainer from "./movieCardContainer";
import Api from "../api/api";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchModal() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const isModalvisible = useSelector((state) => state.common.showSearchModal);
  const dispatch = useDispatch();

  //llamada, inicial cuando el
  useEffect(async () => {
    setMovies(await Api.getTopRatedMovies(page));
  }, []);

  //query
  useEffect(async () => {
    if (query.trim() === "") {
      setMovies(await Api.getTopRatedMovies(page));
    } else {
      setPage(1);
      setMovies(await Api.getMovieFromSearch(query, page));
    }
  }, [query]);

  const handleFetchData = async () => {
    setPage((pre) => pre + 1);
    const nextMovies = await Api.getMovieFromSearch(query, page);
    setMovies((movies) => [...movies, ...nextMovies]);
  };

  console.log("esto es en el modal :D", movies);

  return (
    <InfiniteScroll
      dataLength={movies && movies.length}
      next={handleFetchData}
      hasMore={true}
    >
      <Modal
        show={isModalvisible}
        fullscreen={true}
        onHide={() => toggleSearchModal(dispatch)}
      >
        <Modal.Header
          className="d-flex justify-content-between bg-dark text-white"
          style={{
            height: "80px",
          }}
        >
          <div className="d-flex justify-content-center w-100 h-100">
            <Form.Control
              className="bg-dark text-white w-50 d-flex justify-content-center"
              onChange={(event) => setQuery(event.target.value)}
              size="lg"
              type="text"
              placeholder="Spiderman, Spiderman 2, Spiderman 3, SPIDERMAN!!!"
            />
          </div>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "black" }}>
          {movies && (
            <MoviesCardContainer key="scrollableDiv" movies={movies} />
          )}
        </Modal.Body>
      </Modal>
    </InfiniteScroll>
  );
}

export default SearchModal;
