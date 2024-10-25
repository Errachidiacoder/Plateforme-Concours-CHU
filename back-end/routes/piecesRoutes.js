const express = require('express');
const router = express.Router();
const piecesController = require('../controllers/piecesController');

//route pour ajouter des pièces
router.post('/pieces', piecesController.addPieces);

module.exports = router;
