import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getTopRatedMovies() {
  const movies = await axios(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log("juan ", movies);
  return movies;
}

async function getMovieFromSearch(query) {
  const movies = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return movies;
}

export default { getTopRatedMovies, getMovieFromSearch };
