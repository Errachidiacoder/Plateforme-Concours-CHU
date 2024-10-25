import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Modal } from 'react-bootstrap';
import axios from 'axios';

function JoindrePiece() {
    const [concours, setConcours] = useState([]);
    const [selectedConcours, setSelectedConcours] = useState('');
    const [pieces, setPieces] = useState([]);
    const [nbrePieces, setNbrePieces] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchConcours = async () => {
            try {
                const response = await axios.get('/api/contests');
                setConcours(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des concours:', error);
            }
        };

        fetchConcours();
    }, []);

    const handleAddPiece = () => {
        setPieces([...pieces, { titre: '' }]);
    };

    const handlePieceChange = (index, event) => {
        const newPieces = [...pieces];
        newPieces[index].titre = event.target.value;
        setPieces(newPieces);
    };

    const handleSave = async () => {
        try {
            await axios.post('/api/pieces', {
                id_concour: selectedConcours,
                pieces,
            });
            alert('Pièces sauvegardées avec succès');
            setShowModal(false);
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des pièces:', error);
            alert('Une erreur est survenue');
        }
    };

    const handleOpenModal = () => {
        setPieces([{ titre: '' }]);
        setShowModal(true);
    };

    return (
        <>
            <Button onClick={handleOpenModal}>Joindre des Pièces</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Joindre des Pièces</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="concoursSelect">
                            <Form.Label>Nom du Concours</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedConcours}
                                onChange={(e) => setSelectedConcours(e.target.value)}
                            >
                                <option value="">Sélectionnez un concours</option>
                                {concours.map((concour) => (
                                    <option key={concour.id} value={concour.id}>
                                        {concour.nom}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="nbrePieces">
                            <Form.Label>Nombre de Pièces Jointes</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                value={nbrePieces}
                                onChange={(e) => setNbrePieces(e.target.value)}
                                onBlur={() => setPieces(Array.from({ length: nbrePieces }, () => ({ titre: '' })))}
                            />
                        </Form.Group>

                        {pieces.map((piece, index) => (
                            <Form.Group controlId={`titrePiece-${index}`} key={index}>
                                <Form.Label>Titre de la Pièce {index + 1}</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`Titre pour la pièce ${index + 1}`}
                                    value={piece.titre}
                                    onChange={(event) => handlePieceChange(index, event)}
                                />
                            </Form.Group>
                        ))}

                        <Button variant="link" onClick={handleAddPiece}>+ Ajouter un autre titre</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Fermer</Button>
                    <Button variant="primary" onClick={handleSave}>Sauvegarder</Button>
                </Modal.Footer>
            </Modal>

            <h3>Liste des Pièces Jointes</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom du Concours</th>
                        <th>Nombre de Pièces Jointes</th>
                        <th>Titres des Pièces</th>
                    </tr>
                </thead>
                <tbody>
                    {pieces.length > 0 && (
                        <tr>
                            <td>{concours.find(c => c.id === parseInt(selectedConcours))?.nom}</td>
                            <td>{pieces.length}</td>
                            <td>
                                {pieces.map((piece, index) => (
                                    <div key={index}>{piece.titre}</div>
                                ))}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default JoindrePiece;
