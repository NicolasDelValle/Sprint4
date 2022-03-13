import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function MoviesCardContainer({ movies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hover, setHover] = useState(false);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {movies.data.results.map(
          (movie) =>
            movie.poster_path && (
              <div
                key={Math.random()}
                className="col pb-5 d-flex justify-content-center"
              >
                <Link
                  className="text-decoration-none"
                  to={`/movie/${movie.id}`}
                >
                  {hover && <h5>{movie.title}</h5>}
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="card position-relative"
                    style={{ width: "18rem" }}
                  >
                    <div className=" p-2 bg-dark text-white position-absolute w-100 bottom-0 h-25 rounded-bottom overflow-hidden">
                      <div className="fw-bold overflow-hidden w-100">
                        <div>
                          {movie.title.length > 64
                            ? `${movie.title.substr(0, 60)}...`
                            : movie.title}
                        </div>

                        <div className="d-flex align-items-center lh-1 pb-4">
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          {movie.vote_average}
                          <span className="fw-light text-secondary ms-1">
                            ({movie.vote_count})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "400px" }}>
                      <img
                        className="w-100 h-100 rounded"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        onisLoad={() => setIsLoading(false)}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default MoviesCardContainer;
