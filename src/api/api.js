import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getTrendingMovies(time) {
  const movies = await axios(
    `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}`
  );
  return movies;
}

async function getTopRatedMovies() {
  const movies = await axios(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  return movies;
}

async function getMovieFromSearch(query) {
  const movies = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return movies;
}

async function getMovie(id) {
  const movie = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return movie;
}

export default {
  getTopRatedMovies,
  getMovieFromSearch,
  getTrendingMovies,
  getMovie,
};
