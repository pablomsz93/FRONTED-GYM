import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="body-home">
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">GYM 365</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              <Nav.Link as={Link} to="/Register">Register</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="welcome-container">
        <Container>
          <h1 className="text-center">PONTE EN FORMA CON NOSOTROS</h1>
     
        </Container>
      </div>
    </div>
  );
}