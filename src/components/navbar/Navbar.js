import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import logo from "../../img/Logo.png";
import "./navbar.css";

function Menu() {
  return (
    <Navbar expand="lg" className="bg-indigo-950">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-primary "
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto lg:gap-4">
            <NavDropdown
              className="white-text"
              title="Home"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">NFT</Nav.Link>
            <Nav.Link href="#link">Roadmap</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button
            type="submit"
            className="text-white bg-blue-600 w-28 py-2 rounded-lg text-sm"
          >
            Join Us
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
