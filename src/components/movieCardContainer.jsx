import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Placeholder } from "react-bootstrap";
function MoviesCardContainer({ movies }) {
  const [isLoading, setIsLoading] = useState(true);
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
                <Link to={`/movie/${movie.id}`}>
                  <a href="">
                    <div className="card" style={{ width: "18rem" }}>
                      <ul className="list-group list-group-flush">
                        <span className="list-group-item bg-dark text-white">
                          {movie.title}
                        </span>
                        {isLoading ? (
                          <Placeholder animation="glow">
                            <Placeholder xs={12} size="lg" />
                          </Placeholder>
                        ) : (
                          <img
                            className="list-group-item"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            onisLoad={() => setIsLoading(false)}
                          />
                        )}
                      </ul>
                    </div>
                  </a>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default MoviesCardContainer;
