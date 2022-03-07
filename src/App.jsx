import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import PageNavBarPhone from "./components/bigComponents/navBarPhone";
import Api from "./api/api";
function App() {
  const mostRatedMovies = Api.getTopRatedMovies;
  const mostRatedMoviesCards = mostRatedMovies.results.map((movie) => (
    <p>
      <h1>{movie.title}</h1>
    </p>
  ));

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <PageNavBar />

      {mostRatedMoviesCards}
      <PageNavBarPhone />
    </div>
  );
}

export default App;
