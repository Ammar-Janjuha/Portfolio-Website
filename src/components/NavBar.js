import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToContact = () => {
    document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <Navbar expand="md" className={scrolled ? "navbar scrolled" : "navbar"}>
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'navbar-link active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'navbar-link active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'navbar-link active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'navbar-link active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button onClick={scrollToContact}><span>Lets Connect</span></button>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/muhammad-ammar-janjuha/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                <a href="https://github.com/Ammar-Janjuha" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                <a href="https://www.instagram.com/ammar_janjuha/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

