import React, { useState, useEffect } from 'react';
import './Hero.css';
import ConcoursCards from './ConcoursCards';
import axios from 'axios';

const Hero = () => {
    const [backgroundImage, setBackgroundImage] = useState('/assets/D1.png');
    const [concours, setConcours] = useState([]);

    useEffect(() => {
        const images = [
            '/assets/D1.png',
            '/assets/D2.jpg',
            '/assets/D3.png'
        ];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setBackgroundImage(images[currentIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
        const fetchConcours = async () => {
            try {
                const response = await axios.get('/api/concours');
                setConcours(response.data);
            } catch (error) {
                console.error('Error fetching concours:', error);
            }
        };

        fetchConcours();
    }, []);

    return (
        <>
            <section
                className="hero"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="hero-content">
                    <h1>Bienvenue à CHU-Concours</h1>
                    <p>Participez aux concours en ligne et suivez vos résultats.</p>
                    <div className="hero-buttons">

                        <button className="btn btn-secondary">Concours Ouverts</button>
                    </div>
                </div>
            </section>
            <section className="how-to-register">
                <div className="container">
                    <h2>Comment s'inscrire et utiliser la plateforme</h2>
                    <p>Pour vous inscrire et participer aux concours en ligne, suivez ces étapes :</p>
                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-icon">1</div>
                            <div className="step-description">
                                <h3>s'inscrire à un concours</h3>
                                <p> en cliquant sur le bouton d'inscription.</p>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">2</div>
                            <div className="step-description">
                                <h3>Explorez les concours</h3>
                                <p>Explorez les concours ouverts et inscrivez-vous à ceux qui vous intéressent.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">3</div>
                            <div className="step-description">
                                <h3>Suivez vos résultats</h3>
                                <p>Suivez vos résultats et restez informé des prochaines étapes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ConcoursCards concours={concours} />
        </>
    );
};

export default Hero;
