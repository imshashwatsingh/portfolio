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
            I am an <span className="purple">AI Native Software Engineer Intern at Chegg</span> and a graduate of MCA from GGSIPU, New Delhi.
            <br />
            I completed B.Sc.(Hons.) in Computer Science at University of Delhi.
            <br />
            I build full-stack products with the <span className="purple">MERN stack</span> and love exploring <span className="purple">AI Engineering</span> — LLMs, RAG and AI Agents.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered full-stack apps
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
