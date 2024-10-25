const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwtUtils = require('../utils/jwtUtils');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const results = await User.findByEmail(email);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwtUtils.generateToken({ id: user.id, role: user.role });

        res.json({ token, role: user.role });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { login };
