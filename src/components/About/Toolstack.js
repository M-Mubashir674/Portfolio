import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import {
  DiGit
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title='IntelliJ IDEA'>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;
