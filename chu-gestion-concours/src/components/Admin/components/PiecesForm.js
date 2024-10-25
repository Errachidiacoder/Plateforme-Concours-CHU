import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const PiecesForm = ({ show, onHide, onSave }) => {
    const [pieces, setPieces] = useState([{ titre: '' }]);

    const handleAddPiece = () => {
        setPieces([...pieces, { titre: '' }]);
    };

    const handlePieceChange = (index, event) => {
        const newPieces = [...pieces];
        newPieces[index].titre = event.target.value;
        setPieces(newPieces);
    };

    const handleSave = () => {
        const validPieces = pieces.filter(piece => piece.titre.trim() !== '');
        if (validPieces.length === 0) {
            alert('Please add at least one valid piece title.');
            return;
        }
        onSave(validPieces);
    };


    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Joindre des Pièces</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {pieces.map((piece, index) => (
                        <Form.Group controlId={`formTitre-${index}`} key={index}>
                            <Form.Label>Titre de la Pièce {index + 1}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={`Titre pour la pièce ${index + 1}`}
                                value={piece.titre}
                                onChange={(event) => handlePieceChange(index, event)}
                            />
                        </Form.Group>
                    ))}
                    <Button variant="link" onClick={handleAddPiece}>+ Ajouter une autre pièce</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Fermer</Button>
                <Button variant="primary" onClick={handleSave}>Sauvegarder</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default PiecesForm;