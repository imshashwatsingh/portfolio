import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Bot3D from "../Bot3D";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <span className="home-badge">
                🤖 AI Native Software Engineer Intern @ Chegg
              </span>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHASHWAT SINGH</strong>
              </h1>

              <div className="home-type-wrap">
                <Type />
              </div>

              <div className="home-cta">
                <Button
                  as={Link}
                  to="/project"
                  className="home-btn home-btn-primary"
                >
                  View My Work
                </Button>
                <Button
                  as={Link}
                  to="/about"
                  className="home-btn home-btn-outline"
                >
                  More About Me
                </Button>
              </div>
            </Col>

            <Col md={5} className="home-bot-col">
              <Bot3D height={430} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
