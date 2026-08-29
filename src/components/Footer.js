import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Designed &amp; Developed by Shashwat Singh</h3>
        </Col>

        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} SS</h3>
        </Col>

        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/imshashwatsingh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/imshash140403"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shashwat-singh14/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/imshashwatsingh14/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:imshashwatsingh@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="footer-bottom">
        <Col className="text-center">
          <p className="footer-tagline">
            AI Native Software Engineer · Building. Breaking. Learning. Shipping.
          </p>
          <Button
            variant="outline-light"
            size="sm"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <AiOutlineArrowUp /> Back to Top
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
