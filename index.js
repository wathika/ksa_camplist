
const express = require('express');
const server = express();

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