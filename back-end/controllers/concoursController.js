const Concours = require('../models/concoursModel');

exports.getAllContests = async (req, res) => {
    try {
        const contests = await Concours.getAll();
        res.json(contests);
    } catch (err) {
        res.status(500).send('Error fetching contests');
    }
};

exports.addContest = async (req, res) => {
    try {
        const { name, description, date, specialty, numPosts } = req.body;
        const detail = req.file ? req.file.filename : null;

        await Concours.add({ name, description, date, specialty, numPosts, detail });
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send('Error adding contest');
    }
};

exports.updateContest = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, date, specialty, numPosts } = req.body;
        const detail = req.file ? req.file.filename : null;

        await Concours.update(id, { name, description, date, specialty, numPosts, detail });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Error updating contest');
    }
};

exports.deleteContest = async (req, res) => {
    try {
        const { id } = req.params;
        await Concours.delete(id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Error deleting contest');
    }
};

//pour le dropdown de form ajouterpice 
exports.getConcours = async (req, res) => {
    try {
        const [results] = await db.query('SELECT id, nom FROM concours');
        res.status(200).json(results);
    } catch (error) {
        console.error('Erreur lors de la récupération des concours:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des concours' });
    }
};

