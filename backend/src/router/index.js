const express = require('express');

const router = express.Router();

router.get('/images', (req, res) => {
  res.json('list images');
});
router.get('/images/:id', (req, res) => {
  res.json(`image by id: ${req.params.id}`);
});

module.exports = router;