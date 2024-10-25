require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const concoursRoutes = require('./routes/concoursRoutes');
const piecesRoutes = require('./routes/piecesRoutes');


const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

/**concours admin */
app.use(express.urlencoded({ extended: true }));
// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', concoursRoutes);
app.use('/api', piecesRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
