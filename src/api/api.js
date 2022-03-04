import axios from "axios";

async function movies() {
  console.log(process.env.API_KEY);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=f732f580b6c520759bbb69f67243bb95&language=en-US&page=1`
  );
  console.log(response);
}

export default movies;
