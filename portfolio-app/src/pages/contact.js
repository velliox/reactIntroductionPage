import { Button, Container } from "react-bootstrap";
import React from "react";
import "./../styles.css";

function Contact() {
  return (
    <div className="contactpage">
      <Container>
        <h2 className="header-contact">Hello there!</h2>

        <Button
          variant="success"
          onClick={() => {
            window.open("https://wa.me/0");
          }}
        >
          &#9995;Whatsapp Me <span />
          <span className="span-whatsapp"></span>
          <i className="fab fa-whatsapp"></i>
        </Button>
        <p className="paragraph-contact">
          Hey! I'm currently looking for a opportunities for a developer job, be
          it front-end or back-end! Got a spot? Leave a message! I'll reply as
          soon as possible &#128064; You can also add me on discord if that's
          easier{" "}
          <button
            className="btn-discord"
            onClick={() => {
              window.open("https://discordapp.com/users/197480111769911297");
            }}
          >
            Sebi#4492
          </button>
        </p>

        <hr className="line" />
      </Container>
    </div>
  );
}

export default Contact;
