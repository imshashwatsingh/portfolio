import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    subtitle,
    description,
    techStack = [],
    ghLink,
    demoLink,
    detailLink,
    badge,
    stats,
    isBlog,
  } = props;

  return (
    <Card className="project-card-view">
      <div className="project-card-img-wrap">
        <Card.Img variant="top" src={imgPath} alt={`${title} preview`} />
        {badge && <span className="project-card-badge">{badge}</span>}
      </div>

      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{title}</Card.Title>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}

        <Card.Text className="project-card-desc">{description}</Card.Text>

        {techStack.length > 0 && (
          <div className="project-card-tech">
            {techStack.map((tech) => (
              <span key={tech} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="project-card-stats">
            {stats.map((s) => (
              <span key={s} className="project-stat-pill">
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {detailLink && (
            <Link to={detailLink} className="project-btn project-btn-case">
              <AiOutlineEye /> &nbsp; View Details <BsArrowRight style={{ marginLeft: 4 }} />
            </Link>
          )}
          <div className="project-btn-row">
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-gh"
            >
              <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
            </a>
            {!isBlog && demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-demo"
              >
                <CgWebsite /> &nbsp; Live Demo
              </a>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
