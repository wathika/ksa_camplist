const express = require('express');
const router = express.Router();
const Campsite = require('../models/campsite')

//Get all campsites
router.get('/', async (req, res) => {
  //res.send("Hello world!");
  try {
    const campsites = await Campsite.find();
    res.json(campsites);
  }catch(err) {
    res.status(500).json({ message: err.message });
  };
});

//Get one campsite
router.get('/:id', (req, res) => {

});

//Create one campsite
router.post('/', async (req, res) => {
  const campsite = new Campsite({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    camp_master: req.body.camp_master,
    contact_no: req.body.contact_no
  });
  
  try {
    const newCampsite = await campsite.save();
    res.status(201).json(newCampsite);
  }catch(err) {
    res.status(400).json({ message: err.message });
  };
  
});

//Update one campsite
router.patch('/:id', (req, res) => {

});

//Delete one campsite
router.delete('/:id', (req, res) => {
  
});

module.exports = router;