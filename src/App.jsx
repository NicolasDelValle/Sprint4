import React, { useState, useEffect } from "react";
import "./App.css";
import PageNavBar from "./components/bigComponents/navBar";
import PageHeader from "./components/bigComponents/header";
import MoviePage from "./components/pages/moviePage";
import DirectoryPage from "./components/pages/directoryPage";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Modal, Form } from "react-bootstrap";
import SearchModal from "./components/searchModal";

function App() {
  return (
    <div className="App">
      <PageNavBar />
      <SearchModal />
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="p-0 ">
              <PageHeader />
              <div className="mt-5 mb-5"></div>
            </Container>
          }
        />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="directory" element={<DirectoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
