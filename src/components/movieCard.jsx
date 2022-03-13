import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function MoviesCard({
  movieId,
  movieTitle,
  movieVoteAverage,
  movieVoteCount,
  moviePosterPath,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const style = {
    transform: `scale(${scale})`,
    transitionDelay: 3,
    width: "18rem",
  };

  return (
    <div
      key={Math.random()}
      className="col pb-4 d-flex justify-content-center "
    >
      <Link className="text-decoration-none bg-info" to={`/movie/${movieId}`}>
        <div
          onMouseEnter={() => setScale(1.1)}
          onMouseLeave={() => setScale(1)}
          style={style}
          className="card position-relative border-info "
        >
          <div className=" p-2 bg-dark text-white position-absolute w-100 bottom-0 h-25 rounded-bottom overflow-hidden">
            <div className="fw-bold overflow-hidden w-100">
              <div>
                {movieTitle.length > 64
                  ? `${movieTitle.substr(0, 60)}...`
                  : movieTitle}
              </div>

              <div className="d-flex align-items-center lh-1 pb-4">
                <i className="bi bi-star-fill text-warning me-1"></i>
                {movieVoteAverage}
                <span className="fw-light text-secondary ms-1">
                  ({movieVoteCount})
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: "400px" }}>
            <img
              className="w-100 h-100 rounded"
              src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
              alt={movieTitle}
              onisLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MoviesCard;
