import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import timetable from "../../Assets/Projects/timetable.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timetable}
              isBlog={false}
              title="Time Table Management System"
              description="Time Table Management system that manages the classes schedules. Admin dashboard is also available to control the schedules. React.js is used as frontend while node.js as backend and mongodb is used for storage."
              link="https://github.com/M-Mubashir674/TimeTable_Management_WebApp_React.js"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
