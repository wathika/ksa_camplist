const mongoose = require('mongoose');

const campsiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String, 
    required: true
    },
  //photos: {data: Buffer, contentType: String},
  description: {
    type: String, 
    required: true
    },
  camp_master: {
    type: String
    },
  contact_no: {
    type: Number
    },
});


//exporting the campsite schema
//'Campsite' is the name i'm giving the model in our db
module.exports = mongoose.model('Campsite', campsiteSchema);
