import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Smart Electric Meter: Real-time Consumption Tracking and Predictive Power Control via Mobile App"
              description="This system retrieves and uploads real-time electricity consumption data to Firebase, predicts power consumption based on past usage, and allows users to control home appliances through a mobile app developed with Flutter. It also includes an admin dashboard built with ReactJS to control and manage access to the system. The hardware components were designed and built in-house."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Raspberry Pi Device Controller"
              description="This system allows users to control a Raspberry Pi device remotely using a mobile app or desktop app. The mobile app is built using Flutter, a mobile app development framework, and the desktop app is built using ElectronJS, a framework for building cross-platform desktop applications. Firebase is used as a real-time database to store and retrieve data and enable real-time communication between the mobile/desktop app and the Raspberry Pi device. The system allows users to monitor and control the device using a user-friendly interface, making it easy to use."
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Post Delivery System"
              description="This project is a post-delivery system with a frontend built using ReactJS and a backend built using Spring Boot. The role played in this project is as a frontend developer, where I integrated APIs in the frontend."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Time Table Management System"
              description="Time Table Management system that manages the classes schedules. Admin dashboard is also available to control the schedules. React.js is used as frontend while node.js as backend and mongodb is used for storage."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
