import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Api from "../../api/api";

export default function PageHeader() {
  const [time, setTime] = useState("day");
  const [movies, setMovies] = useState();
  useEffect(async () => {
    const moviesReq = await Api.getTrendingMovies(time);
    console.log(moviesReq.data.results);
    setMovies([
      moviesReq.data.results[0],
      moviesReq.data.results[1],
      moviesReq.data.results[2],
      moviesReq.data.results[3],
    ]);
    console.log("esto es movies", movies);
  }, []);

  return (
    <Carousel>
      {movies?.map((movie) => {
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>;
      })}
    </Carousel>
  );
}
