const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Here are your snacks' });
});

router.post('/', (req, res) => {
  // Logic to add a new snack
  res.status(201).json({ message: 'Snack created' });
});

router.put('/:id', (req, res) => {

  res.status(200).json({ message: 'Snack updated' });
});

router.delete('/:id', (req, res) => {

  res.status(204).json({ message: 'Snack deleted' });
});

module.exports = router; // Export the router