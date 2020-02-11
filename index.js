const http = require('http');

makeServer = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'} );
  res.write("Hello World!");
  res.end();
};

server = http.createServer(makeServer);

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});