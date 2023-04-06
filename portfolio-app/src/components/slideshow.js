import React, { useState, useEffect } from "react";
import imgAngular from "../assets/angular-logo.png";
import imgReact from "../assets/react-logo.png";
import imgSql from "../assets/sql-logo.png";
import imgPython from "../assets/python-logo.png";
import imgJavascript from "../assets/javascript-logo.png";
import "./../styles.css";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const images = [imgAngular, imgReact, imgSql, imgPython, imgJavascript];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentImageIndex]}
        alt="slider"
        className="slider-image"
      />
    </div>
  );
};

export default Slideshow;
