import { Button, Card } from "react-bootstrap";
import "./../styles.css";

const CardTmp = (props) => {
  return (
    <div>
      <Card bg={props.bg} style={props.styles}>
        <Card.Body>
          <Card.Img
            variant={"top"}
            src={props.image}
            className="card-img"
          ></Card.Img>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2">{props.subtitle}</Card.Subtitle>
          <Card.Text className="card-text">{props.text}</Card.Text>
          {props.githubLink && (
            <Button
              variant="success"
              onClick={() => {
                window.open("https://github.com/velliox/licenta-wip");
              }}
            >
              Github
            </Button>
          )}
        </Card.Body>
      </Card>
      {/* <div className="card" style={props.styles}>
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-subtitle">{props.subtitle}</p>
          <p className="card-text">{props.text}</p>
        </div>
      </div> */}
    </div>
  );
};

export default CardTmp;
