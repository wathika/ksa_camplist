
const express = require('express');
const server = express();

const mongoose = require('mongoose');

//default mongodb connection
var mongoDb_url = 'mongodb://someuser:abcd1234@ds253104.mlab.com:53104/ksacampsites';
mongoose.connect(mongoDb_url, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (req, res)=>{
  res.send("Home page!!");
});

server.get('/add-campsite', (req, res)=>{
  res.send('Add a new campsite');
});

server.get('/campsite', (req, res)=>{
  res.send('Campsite page');
})

//express error handling
server.use((req, res)=>{
  res.type('text/plain')
  res.status(505)
  res.send('Error page');
})

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});