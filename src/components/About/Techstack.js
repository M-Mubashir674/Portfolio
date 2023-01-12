import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb
} from "react-icons/di";
import {
  SiNextdotjs,
  SiWeb3Dotjs,
  SiJava,
  SiMysql,
  SiFlutter,
  SiFirebase
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Web3.js">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
