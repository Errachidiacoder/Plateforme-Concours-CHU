const pool = require('../config/db');

exports.addPiece = async (contestId, titre) => {
    try {
        await pool.promise().query(
            'INSERT INTO pieces (id_concour, titre) VALUES (?, ?)',
            [contestId, titre]
        );
    } catch (error) {
        console.error('Error adding piece:', error);
        throw error;
    }
};

exports.getPiecesByContestId = async (contestId) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM pieces WHERE id_concour = ?', [contestId]);
        return rows;
    } catch (error) {
        console.error('Error fetching pieces by contest ID:', error);
        throw error;
    }
};
