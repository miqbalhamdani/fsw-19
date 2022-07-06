import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Navibar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">New Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
