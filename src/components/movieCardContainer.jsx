import { Link } from "react-router-dom";
function MoviesCardContainer({ movies }) {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {movies.data.results.map((movie) => (
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
                    <img
                      className="list-group-item"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </ul>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCardContainer;
