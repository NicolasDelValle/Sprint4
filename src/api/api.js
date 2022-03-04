import axios from "axios";

async function movies() {
  console.log(process.env.API_KEY);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  console.log(response);
}

export default movies;
