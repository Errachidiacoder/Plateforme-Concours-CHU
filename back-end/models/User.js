const pool = require('../config/db');

const User = {
    findByEmail: async (email) => {
        try {
            const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            return rows;
        } catch (err) {
            throw err;
        }
    },

};

module.exports = User;
