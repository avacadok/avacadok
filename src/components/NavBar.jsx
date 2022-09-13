import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <h1>Ava K</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggle-icon"><i className="fa-solid fa-bars"></i></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>CONTACT</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/avacadok"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ava-kuang-8bbb5b113/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="mailto:avakuang8@gmail.com"><i className="fa-solid fa-envelope"></i></a>

            </div>
            {/* <span className="contact" onClick={() => console.log("connect")}>Contact</span> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;