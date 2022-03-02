function MovieRank({ rank }) {
  const ranking = {
    0: <span className="bg-secondary">No la ví :D</span>,
    1: <span className="bg-danger">MALARDA</span>,
    2: <span className="bg-warning">MEEH</span>,
    3: <span className="bg-success">BUENARDA</span>,
  };

  return ranking[rank];
}

export default MovieRank;
