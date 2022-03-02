import "./App.css";
import Welcome from "./Welvome";
import MovieCard from "./components/moviecard";
import movies from "./data/movies.json";
function App() {
  let cardMovies = [];
  for (const movie of movies) {
    cardMovies.push(
      <MovieCard
        title={movie.title}
        year={movie.year}
        rank={movie.rank}
        imgUrl={movie.imgUrl}
      />
    );
  }
  return (
    <div className="App container ">
      <Welcome name="Peliculas" />
      <div className="row row-cols-1 row-cols-md-3 g-5 ">{cardMovies}</div>
    </div>
  );
}

export default App;
