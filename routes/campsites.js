const express = require('express');
const router = express.Router();
const Campsite = require('../models/campsite')

//Get all campsites
router.get('/', async (req, res) => {
  //res.send("Hello world!");
  try {
    const campsites = await Campsite.find();
    res.json(campsites);
  }catch() {
    res.status(500).json({ message: err.message });
  };
});

//Get one campsite
router.get('/:id', (req, res) => {

});

//Create one campsite
router.post('/', (req, res) => {

});

//Update one campsite
router.patch('/:id', (req, res) => {

});

//Delete one campsite
router.delete('/:id', (req, res) => {
  
});

module.exports = router;