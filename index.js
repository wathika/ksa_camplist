const http = require('http');
const url = require('url');

makeServer = function (req, res) {
  let path = url.parse( req.url ).pathname;
  console.log(path);
  if (path === '/'){
    res.writeHead(200, {'Content-Type':'text/plain'} );
    res.write("List of campsites!!");
  }
  else if (path === '/add-campsite'){
    res.writeHead(200, {'Content-Type':'text/plain'} );
    res.write("Add a camp-site page!!");
  }
  else if (path === '/campsite'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Campsite page");
  }
  else {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.write("Error page");
  }
  res.end();
};

server = http.createServer(makeServer);

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});