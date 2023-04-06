import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import React, { useState } from "react";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
