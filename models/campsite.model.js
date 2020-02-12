const mongoose = require('mongoose');

//define a schema
var Schema = mongoose.Schema;

var CampsiteSchema = new Schema({
  name: {type: String, required: true, 'Why no name?'},
  location: {type: String, required: true, 'Why no location?'},
  //photos: {data: Buffer, contentType: String},
  description: {type: String, required: true, 'Why no Description?'},
  camp_master: {type: String},
  contact_no: {type: Number},
});

//compile model from schema and export
module.exports = mongoose.model( 'Campsite', CampsiteSchema );