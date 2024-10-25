exports.addPieces = async (req, res) => {
    const { id_concour, pieces } = req.body;

    if (!id_concour || !pieces || pieces.length === 0) {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        for (let piece of pieces) {
            await db.query('INSERT INTO pieces (id_concour, titre) VALUES (?, ?)', [id_concour, piece.titre]);
        }
        res.status(200).json({ message: 'Pieces saved successfully' });
    } catch (error) {
        console.error('Error saving pieces', error);
        res.status(500).json({ error: 'An error occurred while saving pieces' });
    }
};
