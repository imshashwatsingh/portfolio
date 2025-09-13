import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashwat Singh </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am student, currently pursuing MCA from BVICAM, New Delhi.
            <br />
            I have completed B.Sc.(Hons.) in Computer Science at University of Delhi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Drums
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching High School Students Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shashwat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
