import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import milklogs from "../../Assets/Projects/milklogs.png";
import storeit from "../../Assets/Projects/storeit.png";

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
              imgPath={milklogs}
              isBlog={false}
              title="MilkLogs"
              description="Effortlessly monitor daily milk deliveries, automatically calculate monthly payments, and never lose track of your consumption patterns again."
              ghLink="https://github.com/imshashwatsingh/MilkLogs-Frontend"
              demoLink="https://milk-logs-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storeit}
              isBlog={false}
              title="StoreIt"
              description="A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management."
              ghLink="https://github.com/imshashwatsingh/storeit"
              demoLink="https://storeit-theta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
