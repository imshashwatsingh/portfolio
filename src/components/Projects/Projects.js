import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import milklogs from "../../Assets/Projects/milkedin.png";
import storeit from "../../Assets/Projects/storeit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header — clean, no counts */}
        <div className="project-header">
          <h1 className="project-heading">
            Things I&apos;ve <strong className="purple">built</strong> with care
          </h1>
          <p className="project-subheading">
            Focused on clean architecture, thoughtful UX, and shipping real products — from a
            cross-platform milk ledger with on-device AI to a fast file sharing platform.
          </p>
        </div>

        <Row style={{ justifyContent: "center" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={milklogs}
              isBlog={false}
              badge="Expo • Express • PostgreSQL • Gemini"
              title="milkedin — Daily Milk Expense Tracker"
              subtitle="Cross-platform • Android / iOS / Web • Single Expo codebase"
              description="Cross-platform app to log daily milk consumption & spending by category — with price-snapshot history, heatmap calendar, insights, PDF/Excel export, and milkedin AI (Gemini tool-calling) for natural-language queries over your live data."
              techStack={[
                "Expo 57",
                "React Native",
                "TypeScript",
                "Expo Router",
                "Express 5",
                "PostgreSQL",
                "Gemini 2.5/3.5",
                "JWT + bcrypt",
              ]}
              stats={["Heatmap + Streaks", "PDF/Excel Export", "6 AI Tools"]}
              ghLink="https://github.com/imshashwatsingh/milkedin-frontend"
              demoLink="https://milkedin-frontend.vercel.app/"
              detailLink="/project/milkedin"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={storeit}
              isBlog={false}
              badge="Next.js 15 • Appwrite"
              title="StoreIt"
              subtitle="Storage management & file sharing platform"
              description="Upload, organize, and share files seamlessly — built with Next.js 15 App Router and Appwrite Node SDK. Secure auth, role-based sharing, and optimized preview & download flows."
              techStack={["Next.js 15", "Appwrite", "Tailwind", "TypeScript"]}
              stats={["File Sharing", "Appwrite Auth"]}
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
