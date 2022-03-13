import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MoviesCard from "./movieCard";
function MoviesCardContainer({ movies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const style = { transform: `scale(${scale})`, width: "18rem" };

  return (
    <div className="container mt-5">
      <div className=" row d-flex justify-content-center">
        {movies.data.results.map(
          (movie) =>
            movie.poster_path && (
              <MoviesCard
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
