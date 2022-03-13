import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import Api from "../../api/api";
function MoviePage() {
  const [movie, setMovies] = useState();
  const params = useParams();
  useEffect(async () => {
    setMovies(await (await Api.getMovie(params.id)).data);
  }, []);

  /* `url({https://image.tmdb.org/t/p/w500${movie.poster_path}})`border-bottom border-info border-5 */
  return (
    <Container fluid>
      {movie && (
        <div className="container">
          <div>
            <div className="text-white fs-3 py-1 d-flex flex-row">
              <Link className="text-white me-3 text-decoration-none" to={`/`}>
                <i className="bi bi-arrow-left"></i>
                <span className="text-white ms-3">Inicio</span>
              </Link>
            </div>
            <div
              className="py-3 ps-3 rounded d-flex flex-row"
              style={{
                backgroundImage: `linear-gradient( #0DCAF0, #e81dfd)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Image
                className="me-2"
                width="200px"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                fluid={true}
              />
              <div className=" d-flex flex-column text-start">
                <div className="d-flex flex-row align-items-baseline">
                  <span className="fs-2 me-1 fw-bold text-white lh-1 ">
                    {movie.title}
                  </span>
                  <span className="d-flex align-items-center lh-1 pb-4">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    {movie.vote_average}
                    <span className="fw-light text-secondary ms-1">
                      ({movie.vote_count})
                    </span>
                  </span>
                </div>
                <span className="lh-1 w-75">{movie.overview}</span>
              </div>
            </div>
          </div>
          <h1>Similares</h1>
        </div>
      )}
    </Container>
  );
}

export default MoviePage;
