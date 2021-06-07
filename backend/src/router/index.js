const express = require('express');
const multer = require('multer');

const router = express.Router();

const noteController = require('../controllers/noteController');

router.get('/note', noteController.getNote);
router.get('/note/:id', noteController.getNoteById);

router.post('/note', noteController.addNote);

module.exports = router;