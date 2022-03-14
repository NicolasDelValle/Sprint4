import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Badge, Container, Dropdown } from "react-bootstrap";
import MoviesCardContainer from "../movieCardContainer";
import Api from "../../api/api";
import Rating from "@mui/material/Rating";

function DirectoryPage() {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();

  const [rateValueFilter, setRateValueFilter] = useState(null);
  const [yearFilter, setYearFilter] = useState();
  const [genresFilter, setGenresFilter] = useState();

  useEffect(async () => {
    if (rateValueFilter === null) {
      setMovies(await Api.getMoviesWhitFilters(10, yearFilter, genresFilter));
    } else {
      setMovies(
        await Api.getMoviesWhitFilters(
          rateValueFilter * 2,
          yearFilter,
          genresFilter
        )
      );
    }
    console.log(rateValueFilter * 2, yearFilter, genresFilter);
  }, [rateValueFilter, yearFilter, genresFilter]);

  const dispatch = useDispatch();

  useEffect(async () => {
    setMovies(await Api.getTopRatedMovies(1));
    setGenres(await Api.getGenres());
  }, []);

  const getYearSelectOptions = () => {
    const startYear = 2022;
    const endYear = 1980;

    const years = [];

    for (let i = startYear; i >= endYear; i--) {
      years.push(<option value={i}>{i}</option>);
    }

    return years;
  };

  return (
    <Container>
      {/* filtors */}
      <div className="d-flex pb-3 justify-content-between text-white border-bottom border-info border-5">
        <div className="d-flex flex-column">
          <div className="fs-2 m-0 p-0">Filtrar:</div>
          <div className="d-flex flex-row">
            <Badge
              className="px-2 mx-2 d-flex align-items-center"
              pill
              bg="secondary"
            >
              <Rating
                name="simple-controlled"
                value={rateValueFilter}
                onChange={(event, newRateValueFilter) => {
                  setRateValueFilter(newRateValueFilter);
                }}
              />
            </Badge>

            <Badge
              className="px-2 mx-2 d-flex align-items-center"
              pill
              bg="secondary"
            >
              <span>Año</span>
              <select
                class="form-select mx-3"
                aria-label="Default select example"
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="">Todos</option>
                {getYearSelectOptions()}
              </select>
            </Badge>
            <Badge
              className="px-2 mx-2 d-flex align-items-center"
              pill
              bg="secondary"
            >
              <span>Genero</span>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setGenresFilter(e.target.value)}
              >
                <option value="">Cualquiera</option>
                {genres &&
                  genres.data.genres.map((genre) => (
                    <option value={genre.id}>{genre.name}</option>
                  ))}
              </select>
            </Badge>
          </div>
        </div>
      </div>
      {/* cuerpo */}
      <div style={{ backgroundColor: "black" }}>
        {movies && <MoviesCardContainer movies={movies} />}
      </div>
    </Container>
  );
}

export default DirectoryPage;
