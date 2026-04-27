import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-ammar-janjuha/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
              <a href="https://github.com/Ammar-Janjuha" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
              <a href="https://www.instagram.com/ammar_janjuha/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

