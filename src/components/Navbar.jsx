import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [collapsed, setCollapsed] = useState(true);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    setActiveLink(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setCollapsed(true);
    setActiveLink(link);
  };

  const handleToggleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-dark navbar-dark text-white fixed-top nav-border"
      expanded={!collapsed}
    >
      <Container>
        <Navbar.Brand>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Sohaila Abo El-Wafa
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggleClick}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
              onClick={() => handleLinkClick("home")}
              className={`nav-link me-3 ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => handleLinkClick("about")}
              className={`nav-link me-3 ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => handleLinkClick("skills")}
              className={`nav-link me-3 ${
                activeLink === "skills" ? "active" : ""
              }`}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => handleLinkClick("project")}
              className={`nav-link me-3 ${
                activeLink === "project" ? "active" : ""
              }`}
            >
              Project
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => handleLinkClick("contact")}
              className={`nav-link me-3 ${
                activeLink === "contact" ? "active" : ""
              }`}
            >
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
