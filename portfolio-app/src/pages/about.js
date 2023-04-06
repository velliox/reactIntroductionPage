import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./../styles.css";
import { Link } from "react-router-dom";
import Slideshow from "../components/slideshow";

function About() {
  return (
    <div className="aboutpage">
      <Container>
        <Row>
          <Col md={7}>
            <h3 className="aboutmetitle">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a Comp-Sci Bachellor's Degree Graduate from Ovidius University
              of Constanta! I enjoy working in the industry, be it software or
              hardware and I'd consider myself an enthusiast when it comes to
              anything tech related. I like to learn new things and I can get
              tunnel vision if something catches my attention, ending up with me
              putting hundreds of hours into that specific something! I'm
              currently looking for job opportunities.&#9996;
              <br />
              <br />I am not picky when it comes to what I'm doing since in the
              end the satisfaction comes from a product well made! The building
              blocks can be anything &#129521;
            </p>
          </Col>
          <Col className="aboutdetails">
            <h3>A bit of everything</h3>

            <Slideshow className="slideshow-pos"></Slideshow>
            <ul className="aboutmeframeworks">
              <li>Javascript</li>
              <li>Angular</li>
              <li>SQL</li>
              <li id="link-projects" style={{ textDecoration: "none" }}>
                <Link to="/projects">and more!</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
