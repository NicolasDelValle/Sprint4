import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getTrendingMovies(time) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}`
  );

  return data?.results || [];
}

async function getTopRatedMovies(page) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`
  );

  return data?.results || [];
}

async function getMovieFromSearch(query, page) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=${page}&include_adult=false`
  );

  return data?.results || [];
}

async function getMovie(id) {
  const movie = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return movie;
}

async function getGenres() {
  const generes = await axios(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`
  );

  return generes;
}

async function getMoviesWhitFilters(rate, year, genre, page) {
  const movies =
    await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&year=${year}&vote_count.gte=50&vote_average.lte=${rate}&with_genres=${genre}&with_watch_monetization_types=flatrate
`);
  return movies;
}

export default {
  getTopRatedMovies,
  getMovieFromSearch,
  getTrendingMovies,
  getMovie,
  getGenres,
  getMoviesWhitFilters,
};
