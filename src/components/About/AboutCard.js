import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">M.Mubashir </span>
            from <span className="purple"> Mianwali, Pakistan.</span>
            <br />I am a Senior pursuing Bachelors in Computer Science in Sukkur IBA University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteer Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "With faith, discipline and selfless devotion to the duty, there is nothing worthwhile that you cannot achieve."{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Ali Jinnah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
