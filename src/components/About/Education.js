import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  FaSchool,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      id: 1,
      icon: <FaSchool />,
      title: "Class X (CBSE)",
      score: "95.4%",
      detail: "Central Board of Secondary Education",
      period: "2019",
    },
    {
      id: 2,
      icon: <FaSchool />,
      title: "Class XII (CBSE)",
      score: "95.2%",
      detail: "PCM Stream · Central Board of Secondary Education",
      period: "2021",
    },
    {
      id: 3,
      icon: <FaUniversity />,
      title: "B.Sc (Hons.) Computer Science",
      score: "8.0 CGPA",
      detail: "University of Delhi · 2021 – 2024",
      period: "2021 – 2024",
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      title: "MCA",
      score: "8.7 CGPA",
      detail:
        "Guru Gobind Singh Indraprastha University (GGSIPU) · 2024 – 2026",
      period: "2024 – 2026",
    },
  ];

  return (
    <Container className="education-section">
      <h1 className="project-heading">
        My <strong className="purple">Education</strong>
      </h1>
      <Row className="education-timeline">
        {education.reverse().map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-score">{item.score}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
