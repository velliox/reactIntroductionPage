import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./../styles.css";

function Home() {
  return (
    <React.Fragment>
      <div className="homepage">
        <Container>
          <Row>
            <Col className="homepage-text">
              <h3 className="home-title">Hello there!</h3>
              <p className="home-details">Feel free to...browse around!</p>
              <Button
                className="social-media-button-linkedin"
                variant="success"
                onClick={() => {
                  window.open("https://linkedin.com/in/xlhnzi");
                }}
              >
                <i class="fa fa-linkedin" style={{ "font-size": "36px" }}></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;
