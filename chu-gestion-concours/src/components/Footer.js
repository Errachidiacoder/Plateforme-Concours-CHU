import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section contact-info">
                    <h3>Contactez-nous</h3>
                    <p>Email: <a href="mailto:contact@econcours.com">contact@CHUconcours.com</a></p>
                    <p>Téléphone: +212 53681698</p>
                </div>
                <div className="footer-section social-media">
                    <h3>Suivez-nous</h3>
                    <div className="social-links">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
                <div className="footer-section copyright">
                    <p>&copy; 2024 CHU-Concours. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
