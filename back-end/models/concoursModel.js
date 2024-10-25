const db = require('../config/db');

exports.getAll = async () => {
    const sql = 'SELECT * FROM concours';
    const [rows] = await db.query(sql);
    return rows;
};

exports.add = async (data) => {
    const { name, description, date, specialty, numPosts, detail } = data;
    const sql = 'INSERT INTO concours (nom, description, date, specialite, nbposte, detail) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(sql, [name, description, date, specialty, numPosts, detail]);
    return result;
};

exports.update = async (id, data) => {
    const { name, description, date, specialty, numPosts, detail } = data;
    const sql = `
        UPDATE concours 
        SET nom = ?, description = ?, date = ?, specialite = ?, nbposte = ?, detail = ?
        WHERE id = ?
    `;
    const [result] = await db.query(sql, [name, description, date, specialty, numPosts, detail, id]);
    return result;
};

exports.delete = async (id) => {
    const sql = 'DELETE FROM concours WHERE id = ?';
    const [result] = await db.query(sql, [id]);
    return result;
};
