import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">CHU-Concours</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#description">Description</Link></li>
                <li><Link to="#concours">Concours</Link></li>
                <li><Link to="#resultat">Resultat</Link></li>
                <li><Link to="/dashboard">dashboard</Link></li>

                <li><Link to="#contact">Contact</Link></li>

            </ul>
            <Link to="/login">
                <button className="btn btn-connexion">Connexion</button>
            </Link>
        </nav>
    );
};

export default Navbar;
