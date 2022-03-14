import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Api from "../../api/api";

export default function PageHeader() {
  const [time, setTime] = useState("day");
  const [movies, setMovies] = useState();
  useEffect(async () => {
    const moviesReq = await Api.getTrendingMovies(time);
    setMovies([moviesReq[0], moviesReq[1], moviesReq[2], moviesReq[3]]);
  }, []);

  return (
    <Container
      fluid
      style={{
        backgroundImage: "linear-gradient(#0DCAF0, #e81dfd, black)",
      }}
    >
      <Container>
        <Carousel fade>
          {movies?.map((movie) => (
            <Carousel.Item key={Math.random()}>
              <Row
                className="mb-5 px-3 d-flex justify-content-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col className="me-2" sm={2}>
                  <img
                    className="p-0"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    height="400"
                    alt={movie.title}
                  />
                </Col>
                <Col sm={6}>
                  <div className="d-block w-100 h-100 me-5 text-white p-5 bg-info bg-opacity-75">
                    <h2 className="text-start">{movie.title}</h2>
                    <p className="text-start">{movie.overview}</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}
