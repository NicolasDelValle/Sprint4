import MovieRank from "./movieRank";
function MovieCard({ title, year, rank, imgUrl }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <span className="list-group-item bg-dark text-white">
            {title}
            <span className="text-secondary fw-light">({year})</span>
          </span>

          <MovieRank className="list-group-item" rank={rank} />

          <img className="list-group-item" src={imgUrl} alt={title} />
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
