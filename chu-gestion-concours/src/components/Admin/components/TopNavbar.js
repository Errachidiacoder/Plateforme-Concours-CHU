import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link } from 'react-router-dom';

const TopNavbar = ({ onNavigate }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="top-navbar">
            <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => onNavigate('home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => onNavigate('concours')}>Concours</Nav.Link>
                    <Nav.Link onClick={() => onNavigate('JoindrePiece')}>JoindrePiece</Nav.Link>


                    <Nav.Link onClick={() => onNavigate('candidates')}>Candidates</Nav.Link>
                    <Nav.Link onClick={() => onNavigate('resultats')}>Resultats</Nav.Link>
                    {/* <Nav.Link onClick={() => onNavigate('settings')}>Settings</Nav.Link> */}
                    <Nav.Link onClick={() => onNavigate('logout')}>Deconnexion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavbar;
