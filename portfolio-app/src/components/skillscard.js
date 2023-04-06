import { Card, Col, Row } from "react-bootstrap";
import "./../styles.css";

const SkillsCard = (props) => {
  const listOfSkills = props.skills.map((value, index) => (
    <li key={index}>{value}</li>
  ));
  const middleIndex = Math.ceil(listOfSkills.length / 2);
  const firstHalf = listOfSkills.slice().splice(0, middleIndex);
  const secondHalf = listOfSkills.slice().splice(-middleIndex);

  return (
    <div>
      <Card bg={props.bg} style={props.styles}>
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2">{props.subtitle}</Card.Subtitle>
          <ul className="skillz">
            <Row>
              <Col md={7} className="skills-text">
                {firstHalf}
              </Col>
              <Col md={5} className="skills-text">
                {secondHalf}
              </Col>
            </Row>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsCard;
