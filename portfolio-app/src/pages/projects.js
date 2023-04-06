import { Col, Container } from "react-bootstrap";
import React from "react";
import "./../styles.css";
import CardTmp from "../components/cardtmp";
import imgBidWarz from "../assets/bidWarz.png";
import imgDoomclicker from "../assets/doom-clicker.png";
import imgStudent from "../assets/student.png";
import SkillsCard from "../components/skillscard";

function Projects() {
  return (
    <div className="projectpage">
      <Container className="projectcontainer">
        <Col md={5} className="projectcard">
          <SkillsCard
            title="Languages"
            skills={[
              "HTML5/CSS3",
              "SQL",
              "jQuery",
              "Javascript",
              "C#",
              "Java",
              "Python",
            ]}
          ></SkillsCard>
          <br></br>
          <SkillsCard
            title="Skills"
            skills={[
              "Angular JS",
              "React-Bootsrap",
              "Material-ui",
              "Git/Github",
              "Firebase",
              "SQL Server/MySQL",
              "Windows Forms",
              "MS Office Suite",
            ]}
          ></SkillsCard>
        </Col>

        <Col md={5} className="projectcard">
          <CardTmp
            image={imgBidWarz}
            title="BidWarz"
            subtitle="Software System for Electronic Biddings"
            text="My Bachellor's Dissertation, created in Angular JS with Firebase for a backend system. The web application is designed to 
            mimmick the utility of a normal bidding website, where users can list their own products and also bid on other people's products as they please"
            githubLink="https://github.com/velliox/licenta-wip"
          ></CardTmp>
        </Col>

        <Col md={5} className="projectcard">
          <CardTmp
            image={imgDoomclicker}
            title="DoomClcker"
            subtitle="Web clicker game themed"
            text="Project created with pure Javascript, HTML and CSS that allows the user to aim at monsters that appear on the screen at 
            variable speeds depending on the difficulty set. The game was created as part of the HTML/CSS class from University, mostly inspired by the popular video game, Doom Eternal/2013"
            githubLink="https://github.com/velliox/Doom-Clicker"
          ></CardTmp>
        </Col>
        <Col md={5} className="projectcard">
          <CardTmp
            image={imgStudent}
            title="Student Management"
            subtitle="System to manage students created in Windows Forms"
            text="Project was created as part of the Design Environments class. The program allows the administrator account to enroll student, promote them to a new year and move them between classes aswell as graduate them once their study years are over"
            githubLink="https://github.com/velliox/Gestiune-Studenti---Medii-Proiectare"
          ></CardTmp>
        </Col>
      </Container>
    </div>
  );
}

export default Projects;
