function MovieCardContainer({ movies }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <span className="list-group-item bg-dark text-white">
            {title}
            <span className="text-secondary fw-light">({year})</span>
          </span>

          <img className="list-group-item" src={imgUrl} alt={title} />
        </ul>
      </div>
    </div>
  );
}

export default MovieCardContainer;
