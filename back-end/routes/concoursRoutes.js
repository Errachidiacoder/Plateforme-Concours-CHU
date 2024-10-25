const express = require('express');
const router = express.Router();
const concoursController = require('../controllers/concoursController');
const multerConfig = require('../middlewares/multerConfig');

router.get('/contests', concoursController.getAllContests);
router.post('/contests', multerConfig.single('detail'), concoursController.addContest);
router.put('/contests/:id', multerConfig.single('detail'), concoursController.updateContest);
router.delete('/contests/:id', concoursController.deleteContest);

//
router.get('/concours', concoursController.getConcours);


module.exports = router;
