import React from 'react';
import './ConcoursCards.css';

const ConcoursCards = ({ concours }) => {
    if (!concours || concours.length === 0) {
        return (
            <section className="concours-cards">
                <div className="container">
                    <h2>Concours à venir</h2>
                    <p>Aucun concours disponible pour le moment.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="concours-cards">
            <div className="container">
                <h2>Concours à venir</h2>
                <div className="cards-container">
                    {concours.map((concoursItem) => (
                        <div key={concoursItem.id} className="card">
                            <img src={concoursItem.image || '/asset/default-image.jpg'} alt={concoursItem.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{concoursItem.title}</h3>
                                <div className="card-buttons">
                                    <button className="btn btn-details">Détails</button>
                                    <button className="btn btn-register">S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcoursCards;
