import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"> </Nav>
          <Nav>
            <Nav.Link href="#features">1</Nav.Link>
            <Nav.Link href="#pricing">2</Nav.Link>
            <Nav.Link href="#deets">3</Nav.Link>
            <Nav.Link href="#features">4</Nav.Link>
            <Nav.Link href="#pricing">5</Nav.Link>
            <Nav.Link href="#deets">6</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
