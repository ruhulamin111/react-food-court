import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Genius Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/product#food">Food</Nav.Link>
                        <Nav.Link as={Link} to="/drinks/#drinks">Drinks</Nav.Link>
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Women </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Children</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;