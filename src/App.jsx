import "./App.css";
import movies from "./api/api";

function App() {
  /*  let cardMovies = [];
  for (const movie of movies) {
    cardMovies.push(
      <MovieCard
        title={movie.title}
        year={movie.year}
        rank={movie.rank}
        imgUrl={movie.imgUrl}
      />
    );
  } */
  return (
    <div className="App container ">
      <button onClick={movies}>aver</button>
      <h1>{process.env.REACT_APP_API_KEY} a</h1>
      {/* <Welcome name="Peliculas" />
      <div className="row row-cols-1 row-cols-md-3 g-5 ">{cardMovies}</div> */}
    </div>
  );
}

export default App;
