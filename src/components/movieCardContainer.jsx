import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MoviesCard from "./movieCard";

function MoviesCardContainer({ movies }) {
  return (
    <div className="container mt-5">
      <div className=" row d-flex justify-content-center">
        {movies.data.results.map(
          (movie) =>
            movie.poster_path && (
              <MoviesCard
                key={Math.random()}
                movieId={movie.id}
                movieTitle={movie.title}
                movieVoteAverage={movie.vote_average}
                movieVoteCount={movie.vote_count}
                moviePosterPath={movie.poster_path}
              />
            )
        )}
      </div>
    </div>
  );
}

export default MoviesCardContainer;
