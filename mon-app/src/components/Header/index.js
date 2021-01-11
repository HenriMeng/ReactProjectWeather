import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">henrimeng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/current-weather" className="item">OpenWeatherMap</Nav.Link>
            <Nav.Link href="/zippopotam" className="item">Zippopotam</Nav.Link>
                <Nav.Link href="/postal-code" className="item">Final</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;