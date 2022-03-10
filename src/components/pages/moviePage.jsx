import React, { useState, useEffect } from "react";
function MoviePage() {
  const [movie, setMovies] = useState();
  useEffect(async () => {
    const moviesReq = await Api.getTrendingMovies(time);
    setMovies([
      moviesReq.data.results[0],
      moviesReq.data.results[1],
      moviesReq.data.results[2],
      moviesReq.data.results[3],
    ]);
  }, []);
  return (
    <div className="container ">
      <h1>Esta es la pagina y tal</h1>
    </div>
  );
}

export default MoviePage;
