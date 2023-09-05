import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";

const Headers = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            ARISTRO
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img
                className="rounded-circle"
                width={50}
                height={50}
                src="https://i.ibb.co/MkgFvS6/logo.jpg"
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
