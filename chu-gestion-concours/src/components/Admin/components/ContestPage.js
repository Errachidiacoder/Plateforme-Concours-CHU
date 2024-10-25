import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import PiecesForm from './PiecesForm';

const ContestPage = () => {
    const [contests, setContests] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showPiecesModal, setShowPiecesModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [numPosts, setNumPosts] = useState('');
    const [detail, setDetail] = useState(null);
    const [selectedContest, setSelectedContest] = useState(null);


    const fetchContests = async () => {
        try {
            const result = await axios.get('/api/contests');
            setContests(result.data);
        } catch (error) {
            console.error('Error fetching contests', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('specialty', specialty);
        formData.append('numPosts', numPosts);
        formData.append('detail', detail);

        try {
            if (selectedContest) {
                await axios.put(`/api/contests/${selectedContest.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await axios.post('/api/contests', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            setShowModal(false);
            fetchContests();
        } catch (error) {
            console.error('Error handling submit', error);
        }
    };


    const handleShowModal = (contest = null) => {
        if (contest) {
            setName(contest.name || '');
            setDescription(contest.description || '');
            setDate(contest.date || '');
            setSpecialty(contest.specialty || '');
            setNumPosts(contest.numPosts || '');
            setSelectedContest(contest);
        } else {
            setName('');
            setDescription('');
            setDate('');
            setSpecialty('');
            setNumPosts('');
            setSelectedContest(null);
        }
        setShowModal(true);
    };

    // // Handle opening the modal for adding pieces
    // const handleShowPiecesModal = (contest) => {
    //     setSelectedContest(contest);
    //     setShowPiecesModal(true);
    // };

    // // Handle saving the pieces using PiecesForm
    // const handleSavePieces = async (pieces) => {
    //     if (!selectedContest) return;

    //     try {
    //         await axios.post('/api/pieces', {
    //             id_concour: selectedContest.id, // Pass the selected contest ID
    //             pieces: pieces.map(piece => piece.titre),
    //         });
    //         setShowPiecesModal(false);
    //     } catch (error) {
    //         console.error('Error saving pieces', error);
    //     }
    // };

    // Handle deleting a contest
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/contests/${id}`);
            fetchContests();
        } catch (error) {
            console.error('Error deleting contest', error);
        }
    };

    useEffect(() => {
        fetchContests();
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Spécialité</th>
                        <th>Nombre de postes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contests.map(contest => (
                        <tr key={contest.id}>
                            <td>{contest.name}</td>
                            <td>{contest.description}</td>
                            <td>{contest.date}</td>
                            <td>{contest.specialty}</td>
                            <td>{contest.numPosts}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShowModal(contest)}>Éditer</Button>
                                <Button variant="danger" onClick={() => handleDelete(contest.id)}>Supprimer</Button>
                                {/* <Button variant="secondary" onClick={() => handleShowPiecesModal(contest)}>Joindre Pièce</Button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal for Adding or Editing Contest */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedContest ? 'Éditer Concours' : 'Ajouter Concours'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Nom du Concours</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez le nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Entrez la description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formSpecialty">
                            <Form.Label>Spécialité</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez la spécialité"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formNumPosts">
                            <Form.Label>Nombre de postes</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Entrez le nombre de postes"
                                value={numPosts}
                                onChange={(e) => setNumPosts(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDetail">
                            <Form.Label>Détail (PDF)</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".pdf"
                                onChange={(e) => setDetail(e.target.files[0])}
                                required={!selectedContest}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {selectedContest ? 'Sauvegarder' : 'Ajouter'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal for Adding Pieces using PiecesForm 
            <PiecesForm
                show={showPiecesModal}
                onHide={() => setShowPiecesModal(false)}
                onSave={handleSavePieces}
            />
          */}
            <Button variant="primary" onClick={() => handleShowModal()}>
                Ajouter concours
            </Button>
        </div>
    );
};

export default ContestPage;
