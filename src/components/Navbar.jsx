import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const handleNavItemClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <Navbar
      expand="lg"
      className="bg-dark navbar-dark text-white fixed-top nav-border"
    >
      <Container>
        <Navbar.Brand href="#home">Sohaila Abo El-Wafa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="me-3"
              href="#home"
              onClick={handleNavItemClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="me-3"
              href="#about"
              onClick={handleNavItemClick}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="me-3"
              href="#skills"
              onClick={handleNavItemClick}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className="me-3"
              href="#project"
              onClick={handleNavItemClick}
            >
              Project
            </Nav.Link>
            <Nav.Link
              className="me-3"
              href="#contact"
              onClick={handleNavItemClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


