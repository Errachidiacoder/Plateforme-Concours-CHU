import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    // Liste des chemins où Navbar et Footer ne doivent pas être affichés
    const noNavFooterPaths = ['/login', '/signup', '/dashboard', '/concours'];

    return (
        <>
            {!noNavFooterPaths.includes(location.pathname) && <Navbar />}
            <div>{children}</div>
            {!noNavFooterPaths.includes(location.pathname) && <Footer />}
        </>
    );
};

export default Layout;
